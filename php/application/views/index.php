<?php defined('BASEPATH') OR exit('No direct script access allowed');?>
<!DOCTYPE html>
<html lang="de">
	<head>
		<title><?php echo $title ?></title>
		<?php $this->load->view("head")?>
	</head>
	<body>
		<?php $this->load->view("header")?>
		<?php $this->load->view("content")?>
		<?php $this->load->view("footer")?>
		<i id="top" class="top"></i>
		<?php $this->load->view("script")?>
	</body>
</html>