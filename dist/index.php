<?php require("lib/helpers.inc.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no,initial-scale=1,maximum-scale=1"/>
	<meta name="author" content="Luke Jakimowicz - Evident Agenda">
	<meta name="description" content="portfolio of Luke Jakimowicz - full stack developer based in Dublin, Ireland">
	<meta name="keywords" content="luke jakimowicz, web developer, front-end developer, back-end developer, full stack developer, html 5, css 3, javascript, jquery, foundation, bootstrap, sass, portfolio, php, mysql, gulp, grunt, node.js, npm, ajax, mvc, freelance, freelancer"/>

	<title>Evident Agenda - portfolio of work by Luke Jakimowicz</title>

	<!--[if IE]><link rel="shortcut icon" href="img/favicon.ico"/><![endif]-->
	<link rel="apple-touch-icon-precomposed" href="img/apple-touch-icon-precomposed.png"/>
	<link rel="icon" href="img/favicon.png"/>

	<link href="https://fonts.googleapis.com/css?family=Muli|Oswald:300,700" rel="stylesheet"/>
	<link rel="stylesheet" href="css/foundation.css"/>
	<link rel="stylesheet" href="css/style.css"/>
	<!--[if lte IE 8]><style>.site { display: none; }</style><![endif]-->
	<!--[if lte IE 9]><style>.loader { display: none; }</style><![endif]-->
	

</head>
<body>

	<div class="loader">
		<div class="pane-up"><div class="split-line"></div></div>
		<div class="pane-down"></div>		
		<div class="holder"><div class="wrap"><span></span><span></span><span></span><span></span><span></span></div></div>
	</div>

	<!--[if lte IE 8]>
	<p class="oldie">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
	<![endif]-->


	<div class="site">

		<nav class="columns">
			<div class="nav-content row">
				<a class="logo" title="Evident Agenda" href="#home"></a>
				<a class="menu-toggle"><span></span><span></span><span></span><span></span></a>
				<div class="nav-wrap">
					<ul class="nav-items">
						<li><a href="#home">Home</a></li>
						<li><a href="#profile">Profile</a></li>
						<li><a href="#projects">Projects</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
					<ul class="nav-theme">
						<li class="theme-title"><a class="theme-switch" title="Switch theme"><i class="icon-color-adjust"></i><span>Switch theme</span></a></li>
					</ul>
				</div>
			</div>
		</nav>

		<div class="wrap columns">

			<section class="page home dark row" id="home">
				<div class="wrap">
					<div class="hold">
						<h5>Welcome to</h5>
						<h1>Evident <span>Agenda</span></h1>
						<h2>Portfolio of digital work <span>by Luke Jakimowicz</span></h2>
					</div>
				</div>
				<a class="continue" href="#profile"><i class="icon-down-open"></i></a>
			</section>

			<section class="page profile dark row" id="profile">

				<header>
					<div class="wrapper">
						<div class="holder">
							<h3 class="osl">Skillset and experience</h3>
							<h1 class="osb">Profile</h1>
						</div>
					</div>
				</header>

				<section class="profile-head">

					<div class="profile-image columns small-8 medium-8 large-4"><div><img src="img/luke-jakimowicz.jpg" alt="Luke Jakimowicz"/></div></div>
					<div class="profile-name columns small-16 medium-16 large-4"><div><h5>Luke<br/>Jakimowicz <span>Name</span></h5></div></div>
					<div class="profile-location columns small-8 medium-8 large-4"><div><h5>Dublin<br/>Ireland<span>Location</span></h5></div></div>
					<div class="profile-exp columns small-8 medium-8 large-4"><div><h5><?php echo getElapsedYears('2000-10-01'); ?><span>Years<br/>of experience</span></h5></div></div>
					<div class="profile-mileage columns small-8 medium-8 large-4"><div><h5>100+<span>Completed<br/>projects</span></h5></div></div>
					<div class="profile-cv columns small-24 large-4"><div><a href="luke-jakimowicz-cv-en.pdf" target="_blank"><span>Download <strong>CV</strong></span></a></div></div>
					
				</section>

				<section class="skill-legend small-24">
					<h5>Skillset legend</h5>
					<ul>
						<li>primary skills</li>
						<li class="secondary">secondary skills</li>
						<li class="tertiary">tertiary skills</li>
					</ul>
				</section>

				<section class="skill-breakdown">

					<section class="skills columns small-24 large-12 xlarge-6">
						<h2 class="osb">Front end<br/>development</h2>
						<ul class="skillset">
							<li>HTML 5</li>
							<li>CSS 3</li>
							<li>JavaScript</li>
							<li>ECMAScript 6</li>
							<li>jQuery</li>
							<li>SASS</li>
							<li>VueJS 2</li>
							<li>Webpack</li>
							<li class="secondary">gulp</li>
							<li class="secondary">bower</li>
							<li class="secondary">Foundation</li>
							<li class="secondary">Bootstrap</li>
							<li class="tertiary">grunt</li>
							<li class="tertiary">REST API</li>
							<li class="tertiary">LESS</li>
							<li class="tertiary">HAML</li>
							<li class="tertiary">3rd party<br/>APIs &amp; SDKs</li>
						</ul>
					</section>
					<section class="skills columns small-24 large-12 xlarge-6">
						<h2 class="osb">Back end<br/>development</h2>
						<ul class="skillset">
							<li>PHP</li>
							<li>SQL</li>
							<li>Wordpress</li>
							<li>MySQL</li>
							<li>Laravel</li>
							<li>Lumen</li>
							<li class="secondary">composer</li>
							<li class="secondary">SlimPHP</li>
							<li class="secondary">Redbean</li>
							<li class="secondary">Twig</li>
							<li class="secondary">MVC</li>
						</ul>
					</section>
					<section class="skills columns small-24 large-12 xlarge-6">
						<h2 class="osb">Technical<br/>expertise</h2>
						<ul class="skillset">
							<li>Responsive<br/>Design</li>
							<li>Agile<br/>Development</li>
							<li>Full Stack<br/>Development</li>
							<li>Test Driven<br/>Development</li>
							<li>Technical scoping<br/>and project estimation</li>
							<li>Writing &amp; analysis<br/>of technical briefs &amp; funcspecs</li>
							<li class="secondary">Version<br/>control</li>
							<li class="secondary">Managing small<br/>dev teams</li>
							<li class="secondary">W3C Standards Compliance</li>
							<li class="secondary">Accessibility</li>
							<li class="secondary">Rapid<br/>Prototyping</li>
							<li class="secondary">Wireframes</li>							
							<li class="secondary">Conducting<br/>training sessions</li>
							<li class="tertiary">Scrum</li>
						</ul>
					</section>
					<section class="skills columns small-24 large-12 xlarge-6">
						<h2 class="osb">Toolset<br/>and DevOps</h2>
						<ul class="skillset">
							<li>git</li>
							<li>Adobe Suite</li>
							<li>Visual Studio Code</li>
							<li>LAMP stack</li>
							<li>Ubuntu</li>
							<li class="secondary">Sublime Text</li>
							<li class="secondary">Atom</li>
							<li class="secondary">Apache<br/>administration</li>
							<li class="secondary">bash</li>
							<li class="secondary">AWS</li>
							<li class="secondary">SVN</li>
							<li class="tertiary">Podio</li>
							<li class="tertiary">Asana</li>
							<li class="tertiary">Toggl</li>
							<li class="tertiary">Tickspot</li>
							<li class="tertiary">bugzilla</li>						
						</ul>
					</section>

					<section class="todo columns small-24 large-12 xlarge-24">
						<h2 class="osb">Next on the todo list</h2>
						<p>There's always something new on the horizon so I already have a shortlist of technologies I'm excited to work with and master next.</p>
						<ul class="skillset">
							<li class="secondary">React</li>
							<li class="secondary">TypeScript</li>
						</ul>
					</section>

					<section class="brands columns small-24 large-12 xlarge-24">
						<h2 class="osb">Brands I worked with</h2>
						<ul class="brands-list">
							<li class="boi" title="Bank of Ireland"></li>
							<li class="aib" title="AIB"></li>
							<li class="mer" title="Mercedes Benz"></li>
							<li class="cok" title="Coca-Cola"></li>
							<li class="uls" title="Ulster Bank"></li>
							<li class="dan" title="Danone"></li>
							<li class="jam" title="Jameson"></li>
							<li class="gui" title="Guinness"></li>
							<li class="vod" title="Vodafone"></li>
							<li class="car" title="Carlsberg"></li>
							<li class="mic" title="Microsoft"></li>
							<li class="bus" title="Bushmills"></li>
							<li class="glo" title="Glohealth"></li>
						</ul>

					</section>

				</section>

			</section>

			<section class="page projects dark row" id="projects">

				<header>

					<div class="wrapper">
						<div class="holder">
							<h3 class="osl">Selected</h3>
							<h1 class="osb">Projects</h1>
							<h4 class="justified osl">Click below for more info</h4>
						</div>
					</div>
				</header>

				<ul class="works-list osb">
					
					<li data-id="glohealth" class="glo columns small-24 medium-12 large-14"><a><h3>Glohealth</h3></a></li>
					<li data-id="first" class="dan columns small-24 medium-12 large-10"><a><h3>First<br/>1000 Days</h3></a></li>
					<li data-id="dragonsden" class="boi columns small-24 medium-12 large-10"><a><h3>The Sixth<br/>Dragon</h3></a></li>
					<li data-id="ginger" class="jam columns small-24 medium-12 large-14"><a><h3>Ginger<br/>and Lime</h3></a></li>
					<li data-id="beatlcr" class="glo columns small-24 medium-12 large-14"><a><h3>Beat LCR</h3></a></li>
					<li data-id="blackbarrel" class="jam columns small-24 medium-12 large-10"><a><h3>Black<br/>Barrel</h3></a></li>				
					<li data-id="ripple" class="rip columns small-24 medium-12 large-10"><a><h3>Ripple<br/>Platform</h3></a></li>
					<li data-id="jdiff" class="jam columns small-24 medium-12 large-14"><a><h3>Dublin<br/>Film<br/>Festival</h3></a></li>
					<li data-id="vodafone" class="vod columns small-24 medium-12 large-14"><a><h3>Vodafone<br/>Comedy<br/>Festival</h3></a></li>
					<li data-id="windows" class="mic columns small-24 medium-12 large-10"><a><h3>Meet<br/>Windows 8</h3></a></li>
					<li data-id="coke" class="cok columns small-24 medium-12 large-10"><a><h3>Coke<br/>Cities</h3></a></li>
					<li data-id="portfolio" class="ea columns small-24 medium-12 large-14"><a><h3>Previous<br/>Portfolio</h3></a></li>

				</ul>
				
				<div class="project-wrapper">
					<div class="project-details row">

						<div class="projects-inner">

							<?php 

								include("projects/glohealth.inc.php");
								include("projects/first.inc.php");
								include("projects/ginger.inc.php");
								include("projects/dragon.inc.php");
								include("projects/lcr.inc.php");
								include("projects/barrel.inc.php");
								include("projects/ripple.inc.php");
								include("projects/jdiff.inc.php");
								include("projects/comedy.inc.php");
								include("projects/windows.inc.php");
								include("projects/coke.inc.php");
								include("projects/portfolio.inc.php");

							?>

						</div>

					</div>				
				</div>

			</section>

			<section class="page contact dark row" id="contact">

				<header>

					<div class="wrapper">
						<div class="holder">
							<h3 class="osl">Get in touch</h3>
							<h1 class="osb">Contact</h1>
						</div>
					</div>
				</header>

				<div class="contact-info">

					<div class="contact-row">

						<div class="columns small-24 large-16"><a href="mailto:" class="mailto"><i class="icon-mail-alt"></i> <span></span></a></div>
						<div class="columns small-24 large-8"><a href="skype:lukasz.jakimowicz"><i class="icon-skype"></i> lukasz.jakimowicz</a></div>

					</div>
					<div class="contact-row social">

						<div class="columns small-24 large-8"><a href="https://www.linkedin.com/in/lukaszjakimowicz" target="_blank"><i class="icon-linkedin"></i> linkedin</a></div>
						<div class="columns small-24 large-8"><a href="https://github.com/xnoybis" target="_blank"><i class="icon-github-circled"></i> github</a></div>
						<div class="columns small-24 large-8"><a href="http://stackoverflow.com/story/evidentagenda" target="_blank"><i class="icon-stackoverflow"></i> stack overflow</a></div>

					</div>

				</div>

			</section>

			<footer class="row">
				<p>Copyright &copy; <?php echo date("Y"); ?> Evident Agenda</p>
				<a href="https://github.com/xnoybis/portfolio-2016" target="_blank">View code</a>
			</footer>

		</div>
		
	</div>

	<!-- vendor scripts -->
	<script src="js/vendors.js"></script>
	<!-- end of vendor scripts -->

	<script src="js/scripts.js"></script>

	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-21318533-1', 'auto');
		ga('send', 'pageview');
	</script>

	<!-- livereload script - dev env only -->
	<?php if (strcmp($_SERVER['SERVER_NAME'],"dev3") === 0) { ?><script src="//<?php echo $_SERVER['SERVER_NAME']; ?>:35729/livereload.js"></script><?php } ?>

</body>
</html>