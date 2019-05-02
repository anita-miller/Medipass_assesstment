import React from 'react';
import SearchBar from '../Parts/SearchBar';
import renderer from 'react-test-renderer';


test('SearchBar component renders a snapshot', () =>{
    const order = "asc"
    const component = renderer.create(
        <SearchBar 
            order={order}
        />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();



});