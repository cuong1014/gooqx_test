<div class="blog-container">
	<div class="blog-bg container">
		<img src="asset/img/brooke-cagle-274479.jpg"/>
		<div class="blog-author">
			<div class="blog-post-title">
				<h1>Lorem Ipsum</h1>
			</div>
			<p class="blog-post-meta">By: <a>Percy Brooke</a> / <span>11.09.2017</span> / <span>0</span> comments</p>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-sm-8 blog-main">
				<?php $this->load->view("content/post") ?>
				<div class="blog-readmore">
					<h4><a>Lorem</a></h4>
				</div>
				<div class="blog-post-bg">
					<h2>Lorem ipsum dolor sit veniamim ad minim.</h2>
					<img src="asset/img/brooke-cagle-274481.jpg" />
				</div>
				<hr/>
				<nav>
					<ul class="blog-pager">
						<li><a href="#">Older Post</a></li>
						<li><a href="#">Newer Post</a></li>
					</ul>
				</nav>
				<?php $this->load->view("content/comment") ?>
				<?php $this->load->view("content/latest") ?>
			</div>

			<div class="col-sm-4 blog-sidebar">
				<hr/>
				<?php $this->load->view("content/aboutme") ?>
				<hr/>
				<?php $this->load->view("content/social") ?>
				<hr/>
				<?php $this->load->view("content/tags") ?>
				<hr/>
				<?php $this->load->view("content/ads") ?>
				<hr/>
				<?php $this->load->view("content/categories") ?>
			</div>
		</div>
	</div>
</div>