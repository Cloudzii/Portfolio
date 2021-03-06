<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<title>philosophy</title>
<link rel="stylesheet" href="../../asset/css/import.css">
<script src="/thelexus/asset/js/project.js"></script>
<script src="/thelexus/asset/js/main.js"></script>
<script src="/thelexus/asset/js/gnb.js"></script>
</head>


<body>

  <nav id="gnb-nav">

      <header>
        <a href="#none">
          <span></span>
          <cite>MENU</cite>
        </a>
      </header>
      
   <%@include file="../../story-gnb.jsp" %>
      

   <%@include file="../../nav.jsp" %>

  </nav>

  <%@include file="../../footer.jsp" %>

<section id="st_brand">

	<article class="st_phil">
	 	<p><img src="../../asset/image/story/philosophy/bg_s0.jpg" alt="philosophy background image" /></p>
 		<h2><img src="../../asset/image/story/philosophy/head_s0.png" alt="BRAND PHILOSOPHY" /></h2>
	</article>
	<article class="product_phil">
		<ul>
			<li>
				<a href="javascript:void(0)" onclick="popopen('ZvfgdcozI5Y');" >
					<img src="../../asset/image/story/philosophy/img_s1.jpg" alt="YouTube Video" />
					<img src="../../asset/image/story/philosophy/btn_model_play.png" alt="play" class="btn_play" />
	      		</a>

				<div class="popopen" style="display:none;">
			          <a href="javasciprt:void(0)" onclick="close_btn();" style="position:fixed; top:38px; right:20px;">
			            <span class="cl_btn" style="position:absolute; left:20px; top:20px;">close button</span>
			          </a>			          
	      		</div>



				<p><img src="../../asset/image/story/philosophy/txt_s1.png" alt="디자인, 기술, 장인정신과 고객 케어에 있어 끊임없이 노력하고자 하는 렉서스의 기본 브랜드 철학입니다.
                                                   차 자체의 놀라움 뿐만 아니라 렉서스 만의 놀라운 경험을 제공하고자 합니다" /></p>
			</li>
			<li>
				<h3><img src="../../asset/image/story/philosophy/head_s2.png" alt="PRODUCT PHILOSOPHY" /></h3>
				<h4><img src="../../asset/image/story/philosophy/logo_s2.png" alt="PRODUCT PHILOSOPHY logo" /></h4>
				<p><img src="../../asset/image/story/philosophy/txt_s2.png" alt="LEXUS ENGINEERING" /></p>
			</li>
		</ul>
	</article>

	<article class="design_phil">
		<ul>
			<li>
				<div>
					<p><img src="../../asset/image/story/philosophy/bg_s3.jpg" alt="DESIGN PHILOSOPHY" /></p>
					<h3><img src="../../asset/image/story/philosophy/head_s3.png" alt="DESIGN PHILOSOPHY" /></h3>
				</div>
			</li>
			<li>
				<h4><img src="../../asset/image/story/philosophy/txt_s3_2.png" alt="L finesse" /></h4>
				<p><img src="../../asset/image/story/philosophy/img_s3_21.png" alt="렉서스의 디자이너들에게, 모든 자동차는 두 가지의 잘 조화된 개념을 포함하고 있습니다." /></p>
				<img src="../../asset/image/story/philosophy/img_s3_22.jpg" alt="L finesse concept board" />
			</li>
		</ul>
	</article>

	<article class="care_phil">
				<h3><img src="../../asset/image/story/philosophy/head_s4.png" alt="LEXUS CUSTOMER CARE" /></h3>
				<p><img src="../../asset/image/story/philosophy/txt_s4.png" alt="Unsurpassed Customer Care Omotenashi" /></p>
				<img src="../../asset/image/story/philosophy/img_s4.jpg" alt="customer care image" />

	</article>

	<article class="craft_phil">
		<h3><img src="../../asset/image/story/philosophy/head_s5.png" alt="PRECISION CRAFTSMANSHIP" /></h3>
		<p><img src="../../asset/image/story/philosophy/txt_s5.png" alt="TAKUMI 렉서스다운 제품에 숨결을 불어넣다 : 장인정신" /></p>
		<img src="../../asset/image/story/philosophy/img_s5.jpg" alt="craftsmanship image" />
	</article>

	<article class="covenant_phil">
		<h3><img src="../../asset/image/story/philosophy/head_s6.png" alt="THE LEXUS COVENANT " /></h3>
		<img src="../../asset/image/story/philosophy/img_s6.jpg" alt="covenant image" />
		<p><img src="../../asset/image/story/philosophy/txt_s6.png" alt="What we stand for" /></p>
		<span><img src="../../asset/image/story/philosophy/img_s6_covenant.jpg" alt="THE LEXUS COVENANT image" /></span>
	</article>



</section>

	

</body>
</html>
