import { useState, useEffect } from 'react';
import Searchbar from '../SearchBar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { getGalleryData } from 'servises/Api';

import { Gallery } from '../ImageGallery/ImageGallery.styled';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';


export default function App() {

  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);


  useEffect(() => {

    getGalleryData({ query, page })
      .then(result => {

        const newImages = [...images, ...result.images];
        setImages({ images: newImages });
        setTotal({ total: result.total });

      })

      .catch(error => setError({ error: error }))
      .finally(() => setLoading({ loading: false }))

    scrollPage();
  }, [images, page, query]
  )

  const searchImage = (query) => {
    setLoading(true);
    setQuery(query);
    setError(null);
    setImages([]);
    setPage(1);
  }

  const loadMore = () => {
    setPage(({ page: page + 1 }));
  };

  const scrollPage = () => {
    const { height: cardHeight } = document
      .querySelector('#gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <Searchbar onSubmit={searchImage} />
      <Gallery id="gallery">
        {loading && <Loader />}
        {error && <div>Opsss... {error}</div>}
        <ImageGallery images={images} />
        {page < total && !error && (
          <Button clickHandle={loadMore}>LOAD MORE</Button>
        )}
      </Gallery>
    </>
  );
}


// export class App1 extends Component {
//   state = {
//     images: [],
//     query: '',
//     loading: false,
//     error: null,
//     page: 1,
//     total: 1,
//   };


//   async componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.page !== this.state.page ||
//       prevState.query !== this.state.query
//     ) {
//       this.getImages();
//     }
//     this.scrollPage();
//   }

//   searchImage = query => {
//     this.setState({
//       loading: true,
//       query: query,
//       error: null,
//       images: [],
//       page: 1,
//     });
//   };

//   loadMore = () => {

//     this.setState(prevState => ({ page: prevState.page + 1 }));

//   };

//   scrollPage() {
//     const { height: cardHeight } = document
//       .querySelector('#gallery')
//       .firstElementChild.getBoundingClientRect();

//     window.scrollBy({
//       top: cardHeight,
//       behavior: 'smooth',
//     });
//   }

//   async getImages() {

//     await getGalleryData(this.state.query, this.state.page,)
//       .then(result => {

//         const newImages = [...this.state.images, ...result.images];
//         this.setState({ images: newImages, total: result.total });
//         // if (result.status === 200) {
//         //   this.scrollPage();
//         // }
//       })

//       .catch(error => this.setState({ error: error }))
//       .finally(() => this.setState({ loading: false }))
//   }

//   render() {
//     const { images, total } = this.state;

//     return (
//       <>
//         <Searchbar onSubmit={this.searchImage} />
//         <Gallery id="gallery">
//           {this.state.loading && <Loader />}
//           {this.state.error && <div>Opsss... {this.state.error}</div>}
//           <ImageGallery images={images} />
//           {this.state.page < total && !this.state.error && (
//             <Button clickHandle={this.loadMore}>LOAD MORE</Button>
//           )}
//         </Gallery>
//       </>
//     );
//   }
// }


// export default App;