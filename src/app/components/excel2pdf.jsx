'use client';

import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import Image from 'next/image';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row'
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    marginBottom: 5
  }
});

const ExcelDocument = ({ rows }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.table}>
        {rows.map((row, index) => (
          <View key={index} style={styles.tableRow}>
            {row.map((cell, cellIndex) => (
              <View key={cellIndex} style={styles.tableCol}>
                <Text style={styles.tableCell}>{cell}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

const Excel2PDF = () => {
  const [rows, setRows] = useState([]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const workbook = XLSX.read(e.target.result, { type: 'binary' });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        setRows(data);
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div className='flex flex-col justify-center w-50% ml-3'>
      <h2 className='px-10'>Excel to PDF</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      {rows.length > 0 && (
        <PDFDownloadLink document={<ExcelDocument rows={rows} />} fileName="converted.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
        </PDFDownloadLink>
      )}
      <Image
                src="/download1.png"
                width={300}
                height={300}
                alt="Picture of the author"
            />
    </div>
  );
}

export default Excel2PDF;