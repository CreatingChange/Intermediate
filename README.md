##Getting Started

Go to the [Project Folder](https://github.com/CreatingChange/Beginner) and click on the "Download ZIP" button in the right hand column. Navigate to where your computer has downloaded this file.

Double click on the new Zip file so that it will unzip and then move that folder into a location where you want to store your project. I have a folder I call "Code".

Next we need a program to edit text. Download [Sublime](www.sublimetext.com) and open it. There are many text editors available; this is just one that we like.

Open your project folder in Sublime by right clicking it and selecting open with. In Sublime, you should see your project folder and your css folder.

Continue by [downloading JQuery](http://jquery.com/download/) and choose the uncompressed, development version, 1.11.2. This should download to the same place the project did.

Create a few folder inside your project directory called `js` and put your newly downloaded JQuery file in that folder. While you're there, create a new, empty file called `scripts.js`. This is where all of your Javascript and JQuery will go.

##Writing Code

Open your `index.html` file in Sublime and put the following HTML right inside `<head>` tags.

```html
<script src="../js/jquery-1.11.2.js"></script>
<script src="../js/scripts.js"></script>
```

These tell our HTML where to find the javascript resources we're going to provide both from our code and JQuery. It's important that our own `scripts.js` file goes after jQuery, as it will rely on jQuery functionality that must be loaded first.

Now open your `scripts.js` file in Sublime as well.

Let's use some JQuery to interact with an element on our page. First let's take a look at how the images on the page are coded in the HTML.

```html
<div class="row">
    <img class="image_1" src="img/rsz_image_1.jpg" alt="Are you a boy or girl? No.">
    <img class="image_1" src="img/rsz_image_1.jpg" alt="Are you a boy or girl? No.">
</div>
```

Elements like `<img>` tags can have attributes assigned to them through class and id values. These let us locate a specific element and use Javascript and JQuery to interact with them. Inside your `scripts.js` file now type:

```javascript
$(".image_1").hover(function() {

    });
```

If we break this down there are several parts to even this small bit of code. `$(".image_1")` means that using JQuery we're going to look for an interaction with any page element with a class of "image_1". The `$` is simply a much shorter way of saying `jQuery` which you'll be seeing a lot in this lesson.

When listening or styling elements a period is used for classes and a pound sign (hash) is used for ids. Classes can be used over and over again on many different elements in one page. Ids are expected to be unique.

The next section, the `.hover(function()` section says what specific action to listen for. In this case we're looking for the cursor to roll over an element but many different options exist including:

    * `.click()`
    * `.dblclick()`
    * `.show()`
    * `.focus()`
    * `.keypress()`

I bet you already have some idea what a lot of those do!

The empty line between the `{` and the `}` is where we'll be placing the code that tells our site *what* to do when it "hears" the even happen. These collectively are called *Event Listeners* or *Event Handlers*.

##Complete the Functionality

Now let's create some content that we want to see when we hover over the top left hand image. Go back to your `index.html` file and place the `<p>` tag where you see it in the code snippet below.

```html
<div class="col-md-6">
    <div class="row">
        <img class="image_1" src="img/rsz_image_1.jpg" alt="Are you a boy or girl? No.">
        <p id="hover_text">Are you a boy or a girl? No.</p>
        <img class="image_1" src="img/rsz_image_1.jpg" alt="Are you a boy or girl? No.">
    </div>
```


















