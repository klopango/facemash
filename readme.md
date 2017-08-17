# Facemash
As you may know, Zuckerberg once created a website which compare girl with other girls when he was still a student at Harvard. The website was called **Facemash**, unfortunately the website was closed due to people privacy being violated.

The purpose of this project was to recreate **Facemash** minus the girl and stuff so all we have is the website and the algorithm.

## Documentation
Documentation of the two folders/directory in this repository

### Scrap
Scrap is an _image scraping_ script written in [stackoverflow](https://stackoverflow.com/questions/12740659/downloading-images-with-node-js), but I modificate it so it will fit this project.

### Web
Web is a folder which has the website interface inside of it, it takes images which the `scrap` script have downloaded and show it to the users and it will submit the result of the images which the user have clicked to the database.

## Usage
```javascript
// scrap/index.js line 13 - 17
for (var a = 1; a < 2000; a++) {
	download('http://domain.org/photo/' + a + '.jpg', 'img/' + a + '.jpg', function(){	  
		
	});
}
```

### Explanation
As you can see, I start the code with `for` syntax, which mean I'm doing a for-loop from number 1 to number 2000, and I will take the photos from `domain.org/photo/` with the photos that match with the number/id.

### Example : `http://domain.org/photo/22.jpg`
<br>
From the URL above, the script will download the photos one by one, starting from `http://domain.org/photo/1.jpg` and it will end after `http://domain.org/photo/2000.jpg`.

## License
This project is licensed under the GNU Affero General Public License, version 3.