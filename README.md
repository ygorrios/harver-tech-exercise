# harver-tech-exercise

## Installation

Install the libraries typing `npm i` on root of this project

## Run

1 - Type `npm start` in order to run the nodemon server  
2 - Send a request to url: `http://localhost:8001/api/v1/cat`  
3 - Set request as POST and send this body:  
```
{
	"catDetails": [{
		"text": "Hello"
	}, {
		"text": "You"
	}]
}
```
4 - Check the image `cat-card.png` generated on roo of this project