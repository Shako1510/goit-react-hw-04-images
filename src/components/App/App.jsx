import { useState, useEffect } from 'react';
import Searchbar from '../SearchBar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
// import { getGalleryData } from 'servises/Api';
import axios from 'axios';
import { Gallery } from '../ImageGallery/ImageGallery.styled';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';



export function App() {

  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  // const [total, setTotal] = useState(1);


  useEffect(() => {
    if (query) {
      setLoading(true)
      getImages(query, page).then(response => {
        setImages(prev => [...prev, ...response]);
      })
        .catch(error => console.log(error))
        .finally(setLoading(false))

    }

  }, [query, page])

  useEffect(() => {
    scrollPage();
  }, [images]);

  const getImages = async (query, page) => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=29202884-ba403f8614fd116f5e6699f2a&image_type=photo&orientation=horizontal&per_page=12`
      );
      return response.data.hits;

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);

    }

  };

  const searchImage = (query) => {
    setLoading(true);
    setImages([]);
    setQuery(query);
    setError(null);

    setPage(1);
  }

  const loadMore = () => {
    setPage(prev => page + 1);
    setLoading(false);
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
        <ImageGallery images={images} />
        {loading && <Loader />}
        {error && <div>Opsss... {error}</div>}

        {images.length > 0 && <Button clickHandle={loadMore} />}
      </Gallery>
    </>
  );
}


// useEffect(() => {
//   if (!query) {
//     return;
//   }
//   const getImages = async () => {
//     await getGalleryData({ query, page })
//       .then(result => {
//         console.log(result)
//         setImages(prev => [...prev, ...result.images])
//         console.log(images);
//         setTotal(result.total);

//       })
//       .catch(error => console.log(error))
//       .finally(setLoading(false))
//   }

//   getImages();
//   scrollPage();


// }, [page, query]
// )

// const getImages = async () => {

//   await getGalleryData({ query, page })
//     .then(result => {
//       setImages(prev => [...images, ...result.images])
//       console.log(result.images);
//       setTotal({ total: result.total });
//       console.log(result.total)
//     })
//     .catch(error => console.log(error))
//     .finally(setLoading(false))
// }




// export class App extends Component {
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


export default App;