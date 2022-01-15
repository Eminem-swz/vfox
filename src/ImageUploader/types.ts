interface BeforeUploadHandlers {
  formatSize(size: number): string
}

export type Accept = 'all' | 'png' | 'jpeg' | 'jpg' | 'webp'
export type UploadStatus = 'reading' | 'uploading' | 'uploaded' | 'failed'

export interface UploadHandlers {
  getUploadId(): number
  formatSize(size: number): string
  setUploading(message: string): void
  fail(e?: string | Error): void
  success(url: string): void
}

export type BeforeUploadReturn = boolean | Promise<boolean | File> | void
export type BeforeUpload = (
  file: File,
  handlers: BeforeUploadHandlers
) => BeforeUploadReturn
export type UploadReady = (file: File, handlers: UploadHandlers) => void

export type OnDelete = (payload: {
  index: number
  item: {
    id: number
    status: UploadStatus
    url: string | null
  }
}) => void
