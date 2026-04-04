type FileType = "csv" | "pdf" | "xlsx";

interface FileTypeConfig {
  extension: string;
  mimeType: string;
}

const FILE_TYPE_MAP: Record<FileType, FileTypeConfig> = {
  csv: {
    extension: ".csv",
    mimeType: "text/csv;charset=utf-8;",
  },
  pdf: {
    extension: ".pdf",
    mimeType: "application/pdf",
  },
  xlsx: {
    extension: ".xlsx",
    mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
};

export function saveFile(data: ArrayBuffer | BlobPart, filename: string, type: FileType): void {
  const config = FILE_TYPE_MAP[type];
  const blob = new Blob([data], { type: config.mimeType });

  // Ensure correct extension
  const name = filename.endsWith(config.extension) ? filename : `${filename}${config.extension}`;

  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  anchor.style.display = "none";

  document.body.appendChild(anchor);
  anchor.click();

  // Cleanup
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
