export function downloadBlob(blob: Blob, fileName: string) {
  // Blob을 URL로 변환
  const blobUrl = URL.createObjectURL(blob);

  // 다운로드 링크 생성
  const a = document.createElement('a');
  a.href = blobUrl;
  a.download = fileName; // 다운로드될 파일명 지정

  // 링크를 클릭하여 다운로드 시작
  a.click();

  // 다운로드 후 URL 해제
  URL.revokeObjectURL(blobUrl);
}
