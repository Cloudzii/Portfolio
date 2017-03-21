<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="asset/js/main.js"></script>
  <script src="asset/js/gnb.js"></script>
  <link rel="stylesheet" href="asset/css/import.css">

  <title>Document</title>
</head>
<body>

<nav id="gnb-nav">

      <header>
        <a href="#none">
          <span></span>
          <cite>MENU</cite>
        </a>
      </header>
      
     <%@include file="story-gnb.jsp" %>
      

     <%@include file="nav.jsp" %>

  </nav>

  <%@include file="footer.jsp" %>




</body>
</html>
