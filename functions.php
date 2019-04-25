<?php

  // Add page slug to body class, love this - Credit: Starkers Wordpress Theme
  function add_slug_to_body_class($classes) {
      global $post;
      if (is_home()) {
          $key = array_search('blog', $classes, true);
          if ($key > -1) {
              unset($classes[$key]);
          }
      } elseif (is_page()) {
          $classes[] = sanitize_html_class($post->post_name);
      } elseif (is_singular()) {
          $classes[] = sanitize_html_class($post->post_name);
      }

      return $classes;
  }

  // Remove Admin bar
  function remove_admin_bar() {
      return false;
  }



  function footer_scripts() {
    wp_register_script('scripts', get_template_directory_uri() . '/dist/index.bundle.js', null, '1.0.69', true); // Custom scripts
    wp_enqueue_script('scripts'); // Enqueue it!
  }

  function add_styles() {
    wp_register_style('styles', get_template_directory_uri() . '/dist/main.bundle.css', array(), '1.0.0', 'all');
    wp_enqueue_style('styles'); // Enqueue it!
  }

  function change_twig_view_folder() {
    if ( class_exists('Timber') ) {
      Timber::$dirname = array('src/views', 'src/components');
    }
  }

  add_filter('body_class', 'add_slug_to_body_class'); // Add slug to body class (Starkers build)
  add_filter('show_admin_bar', 'remove_admin_bar'); // Remove Admin bar
  add_action('wp_enqueue_scripts', 'add_styles'); // Add Theme Stylesheet
  add_action('init', 'footer_scripts'); // Add Custom Scripts to wp_footer
  add_action('init', 'change_twig_view_folder');

?>
