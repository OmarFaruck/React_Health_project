import React from 'react';
import Input from '../../Mainnavber/Input/Input';
import '../Searchpage/Searchpage.css'
const Search = () => {
    return (
        <section id='Search'>
            <div className="main_search">
                <h3>Search</h3>
                <span><hr /></span>
                <Input/>
            </div>
        </section>
    );
};

export default Search;