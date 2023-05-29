interface Image {
  id: string;
  label: string;
  url: string;
  date: Date,
}

interface ImageStore {
  images: Image[],
  addImage: (image: Image) => void;
  deleteImage: (imageId: string) => void;
  setImages: (images: Image[]) => void;
}
