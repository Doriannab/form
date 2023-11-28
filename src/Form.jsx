import React from 'react'

function Form({onSubmit}) {
    
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const content = event.target.content.value;
   
    const newTweet = {
      name,
      content,
      like: 0,
    };

    onSubmit(newTweet);

    
    };
  return (
    <div>
    <form onSubmit={handleSubmit} className="form">
    <h4>Add Tweets</h4>
      <input type="text" name="name" placeholder='name' />
      <input type="content" name="content" placeholder='content'/>
      <input type="submit"/>
    </form>
      
    </div>
  )
}
export default Form;
