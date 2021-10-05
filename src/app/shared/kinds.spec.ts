import { Post } from './kinds';

describe('Kinds', () => { 

  it('should be work', () => {
    
    let postObj: Post = new Post ( 
      {} as unknown as FormData,
      '999' 
    );
    
    expect(postObj).toBeTruthy();
   
    
  });


});