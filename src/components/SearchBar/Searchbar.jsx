import PropTypes from 'prop-types';
import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import {
    HeaderForm,
    SearchForm,
    SearchFormButton,
    SearchFormButtonLabel,
    SearchFormInput,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleInput = event => {
        const query = event.currentTarget.value;
        setQuery(query);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (query.trim() === '') return alert('no search query');
        onSubmit(query);
        setQuery('');
    };


    return (
        <HeaderForm>
            <SearchForm onSubmit={handleSubmit}>
                <SearchFormButton type="submit">
                    <FcSearch size="30" />
                    <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SearchFormButton>

                <SearchFormInput
                    type="text"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="query"
                    value={query}
                    onChange={handleInput}
                />
            </SearchForm>
        </HeaderForm>
    );
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

// class Searchbar extends Component {
//     state = {
//         query: '',
//     };

//     handleInput = event => {
//         const query = event.currentTarget.value;
//         this.setState({ query: query });
//     };

//     handleSubmit = event => {
//         event.preventDefault();
//         if (this.state.query.trim() === '') return alert('no search query');
//         this.props.onSubmit(this.state.query);
//         this.setState({ query: '' });
//     };

//     render() {
//         return (
//             <HeaderForm>
//                 <SearchForm onSubmit={this.handleSubmit}>
//                     <SearchFormButton type="submit">
//                         <FcSearch size="30" />
//                         <SearchFormButtonLabel>Search</SearchFormButtonLabel>
//                     </SearchFormButton>

//                     <SearchFormInput
//                         type="text"
//                         autocomplete="off"
//                         autoFocus
//                         placeholder="Search images and photos"
//                         name="query"
//                         value={this.state.query}
//                         onChange={this.handleInput}
//                     />
//                 </SearchForm>
//             </HeaderForm>
//         );
//     }
// }

// export default Searchbar;

