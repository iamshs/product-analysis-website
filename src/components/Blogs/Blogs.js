import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h2># What is Context API?</h2>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed.For creating it React.createContext() is all we need.it returns a consumer and a provider.By using context api we do not need to props a data everytime.like if we want to pass a data from grandparent to grandchild we have to props data from one component to other component each time.But if we use context we work globaly.That's how we avoid the problem of passing data from one component to other component. </p>
            <h2>## What is Sementic Tag?</h2>
            <p>Sementic tag is kind of tag which describe its meaning to both developer and browser.Elements like article,header,footer consider as sementic tag because it cleary describe its meaning.In JavaScript, consider a function that takes a string parameter, and returns an <span>li</span> element with that string as its textContent. Would we need to look at the code to understand what the function did if it was called <span>build('Peach')</span>, or <span>createLiWithContent('Peach')</span> ?its more easy to understand. </p>
        </div>
    );
};

export default Blogs;