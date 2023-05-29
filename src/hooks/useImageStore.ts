import { create } from 'zustand';

export const useImageStore = create<ImageStore>((set) => ({
  images: [],
  addImage: (image: Image) => set(
    state => ({ images: [image, ...state.images] })
  ),
  deleteImage: (imageId: string) => set(
    state => ({ images: state.images.filter(image => image.id !== imageId) })
  ),
  setImages: (images: Image[]) => set({ images }),
}));
