

const styles = {
    root:{
        '& .MuiInputBase-input':{
          fontFamily: 'Akaya Telivigala, cursive'
        },
        '& label.Mui-focused': {
            color: '#9f7300',
           
          },
          // '& .MuiInput-underline:after': {
          //   borderBottom: "none",
          // },
          '& .MuiInput-underline:before':{
            content: "none"
          },
          '& .MuiInput-underline:after':{
            // borderBottom: "2px solid #9f7300",
            borderBottom: "none",
          },
          
          
    },
    icon:{
      marginTop: "1rem",
      marginRight: ".6rem",
      color: '#9f7300',
      
    }
}

export default styles;