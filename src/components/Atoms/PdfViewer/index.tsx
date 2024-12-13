import { useState } from 'react'

import { Document, Page, pdfjs } from 'react-pdf'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Configura o worker do PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export default function PdfViewer() {
  const [numPages, setNumPages] = useState<number | undefined>(undefined)
  const [pageNumber, setPageNumber] = useState<number>(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  function goToNextPage() {
    setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages || 1))
  }

  function goToPreviousPage() {
    setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1))
  }

  return (
    <div>
      <Document file='/terms.pdf' onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={goToPreviousPage} disabled={pageNumber <= 1}>
        Previous
      </button>
      <button onClick={goToNextPage} disabled={pageNumber >= (numPages || 1)}>
        Next
      </button>
    </div>
  )
}
