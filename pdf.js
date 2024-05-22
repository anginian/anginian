export async function loadPdfs() {
  const pdfs = await fetch('./pdf')
  console.log('pdfs', pdfs)
}
