const styles = {
    root:{
        '& .MuiTypography-body1':{
            fontFamily: 'Akaya Telivigala, cursive'
        },
        height : "64px", 
        width: "80%",
        
    },
    textBox:{
        position: "absolute", 
        right: "-100px"
    },
    deleteIcon:{
        "&:hover":{
            transform: "scale(1.2)",
            transition: "all .3s ease-in-out",
            color: "red"
        }
    },
    editIcon:{
        color:"#9f7300",
        "&:hover":{
            transform: "scale(1.2)",
            transition: "all .3s ease-in-out",
            color: "#9f7300"
        }
    },
    checkbox:{
        color: "#9f7300",
        '&$checked': {
            color: "#9f7300",
          }
    }

}

export default styles;