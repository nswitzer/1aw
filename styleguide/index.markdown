---
layout: page
title: Styleguide
permalink: /sg/
---

# This is an h1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo diam orci, nec fringilla augue efficitur non. In quis viverra neque. Aenean sed ante eget magna mattis porta in et ante. Nunc nisl libero, hendrerit vitae nisl ac, accumsan bibendum metus. Integer et massa ante. Mauris iaculis mauris at tellus pellentesque imperdiet. Quisque ultrices consectetur purus sit amet fringilla. Vivamus nec metus ut eros varius luctus. Sed ipsum purus, commodo eget nunc et, gravida gravida elit. Nunc tempus ex a odio aliquet consequat. Mauris scelerisque ut lorem quis posuere. Etiam rhoncus non turpis id porttitor.

## This is an h2

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo diam orci, nec fringilla augue efficitur non. In quis viverra neque. Aenean sed ante eget magna mattis porta in et ante. Nunc nisl libero, hendrerit vitae nisl ac, accumsan bibendum metus. Integer et massa ante. Mauris iaculis mauris at tellus pellentesque imperdiet. Quisque ultrices consectetur purus sit amet fringilla. Vivamus nec metus ut eros varius luctus. Sed ipsum purus, commodo eget nunc et, gravida gravida elit. Nunc tempus ex a odio aliquet consequat. Mauris scelerisque ut lorem quis posuere. Etiam rhoncus non turpis id porttitor.

### This is an h3

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo diam orci, nec fringilla augue efficitur non. In quis viverra neque. Aenean sed ante eget magna mattis porta in et ante. Nunc nisl libero, hendrerit vitae nisl ac, accumsan bibendum metus. Integer et massa ante. Mauris iaculis mauris at tellus pellentesque imperdiet. Quisque ultrices consectetur purus sit amet fringilla. Vivamus nec metus ut eros varius luctus. Sed ipsum purus, commodo eget nunc et, gravida gravida elit. Nunc tempus ex a odio aliquet consequat. Mauris scelerisque ut lorem quis posuere. Etiam rhoncus non turpis id porttitor.

#### This is an h4

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo diam orci, nec fringilla augue efficitur non. In quis viverra neque. Aenean sed ante eget magna mattis porta in et ante. Nunc nisl libero, hendrerit vitae nisl ac, accumsan bibendum metus. Integer et massa ante. Mauris iaculis mauris at tellus pellentesque imperdiet. Quisque ultrices consectetur purus sit amet fringilla. Vivamus nec metus ut eros varius luctus. Sed ipsum purus, commodo eget nunc et, gravida gravida elit. Nunc tempus ex a odio aliquet consequat. Mauris scelerisque ut lorem quis posuere. Etiam rhoncus non turpis id porttitor.

##### This is an h5

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo diam orci, nec fringilla augue efficitur non. In quis viverra neque. Aenean sed ante eget magna mattis porta in et ante. Nunc nisl libero, hendrerit vitae nisl ac, accumsan bibendum metus. Integer et massa ante. Mauris iaculis mauris at tellus pellentesque imperdiet. Quisque ultrices consectetur purus sit amet fringilla. Vivamus nec metus ut eros varius luctus. Sed ipsum purus, commodo eget nunc et, gravida gravida elit. Nunc tempus ex a odio aliquet consequat. Mauris scelerisque ut lorem quis posuere. Etiam rhoncus non turpis id porttitor.

###### This is an h6

`Lorem ipsum dolor sit amet`, consectetur adipiscing elit. Donec commodo diam orci, nec fringilla augue efficitur non. In quis viverra neque. Aenean sed ante eget magna mattis porta in et ante. Nunc nisl libero, hendrerit vitae nisl ac, accumsan bibendum metus. Integer et massa ante. Mauris iaculis mauris at tellus pellentesque imperdiet. Quisque ultrices consectetur purus sit amet fringilla. Vivamus nec metus ut eros varius luctus. Sed ipsum purus, commodo eget nunc et, gravida gravida elit. Nunc tempus ex a odio aliquet consequat. Mauris scelerisque ut lorem quis posuere. Etiam rhoncus non turpis id porttitor.

> "Something was once said about blockquotes."
> - Andrew Paul

## UL

* Beef
* Pork
* Hame

## OL

1. Beer
2. Wine
3. Whiskey

{% highlight php %}
<?php 
function loggedIn(){ 
    //Session logged is set if the user is logged in 
    //set it on 1 if the user has successfully logged in 
    //if it wasn't set create a login form 
    if(!$_SESSION['loggd']){ 
        echo'<form action="checkLogin.php" method="post"> 
        <p> 
            Username:<br> 
            <input type="text" name="username"> 
        </p> 
        <p> 
            Password:<br> 
            <input type="password" name="username"> 
        </p> 
        <p> 
            <input type="submit" name="submit" value="Log In"> 
        </p> 
        </form>'; 
        //if session is equal to 1, display  
        //Welcome, and whaterver their user name is 
    }else{ 
        echo 'Welcome, '.$_SESSION['username']; 
    } 
} 
?>
{% endhighlight %}

{% highlight sass %}
@mixin bp($size, $default: false, $direction: 'min-width') {
    @if ($direction == 'max-width') {
        $size: $size - 1;
    }

    @media (#{$direction}: #{$size}) {
        @content;
    }

    @if ($default) {
        .no-mediaqueries & {
            @content;
        }
    }
}
{% endhighlight %}

{% highlight html %}
<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>
    </li>
  {% endfor %}
</ul>
{% endhighlight %}