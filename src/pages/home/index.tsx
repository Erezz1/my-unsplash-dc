import { FC } from 'react';
import Masonry from 'react-masonry-css';

import { Button, Container, Header, Image, Input, Modal } from '@/components';
import { useModal } from '@/hooks';
import { images } from '@/mock/images';

const breakpointColumnsObj = {
  default: 4,
  1400: 3,
  800: 2,
  500: 1
};
const Home = () => {
  const { action, hiddenModal } = useModal(state => state);

  return (
    <Container>
      <Header />

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map(img => (
          <Image
            label={img.label}
            url={img.url}
            id={img.id}
            date={img.date}
            key={img.id}
          />
        ))}
      </Masonry>

      <Modal show={!!action}>
        {action && <ModalContent
          action={action}
          hiddenModal={hiddenModal}
        />}
      </Modal>
    </Container>
  )
}

interface ModalContent {
  action: 'adding' | 'deleting';
  hiddenModal: () => void;
}
const ModalContent: FC<ModalContent> = ({ action, hiddenModal }) => {
  const content = {
    adding: (
      <>
        <header>
          <h2>Add a new photo</h2>
        </header>
        <main>
          <label>
            <p>Label</p>
            <Input
              border="gray"
              width="1000"
              placeholder="Suspendisse elit massa"
            />
          </label>
          <label>
            <p>Photo URL</p>
            <Input
              border="gray"
              width="1000"
              placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
            />
          </label>
          <label>
            <p>Password</p>
            <Input
              border="gray"
              width="1000"
              placeholder="******************"
              type="password"
            />
          </label>
        </main>
        <footer>
          <Button
            colorScheme="ghost"
            onClick={hiddenModal}
          >
            Cancel
          </Button>
          <Button>Submit</Button>
        </footer>
      </>
    ),
    deleting: (
      <>
        <header>
          <h2>Are you sure?</h2>
        </header>
        <main>
          <label>
            <p>Password</p>
            <Input
              border="gray"
              width="1000"
              placeholder="******************"
              type="password"
            />
          </label>
        </main>
        <footer>
          <Button
            colorScheme="ghost"
            onClick={hiddenModal}
          >
            Cancel
          </Button>
          <Button colorScheme="danger">Delete</Button>
        </footer>
      </>
    )
  }
  return content[action]
}

export default Home;
