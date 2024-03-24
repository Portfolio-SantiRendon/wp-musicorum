<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_musicorum' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'EkP^?0-rUG~!F^1@*OdRy>..=~d1=d@=@%{)TQJb1xhE.4#7`9~$7h%(zN3A}%q?' );
define( 'SECURE_AUTH_KEY',  'GTV/xr=Oyn]yk.E]Et<Of=3Iov(7PsT%wbw$`[OT,4!/{0=~DhxZ3 <]8WBNdh][' );
define( 'LOGGED_IN_KEY',    'gYJuVsa9!I>XE(Y5}(F*YY90&eQ}zm4I=*MO!3z$%hr4Q6<tMMKF|tu!#JR[$|mF' );
define( 'NONCE_KEY',        ' JBdi2Hc;J%Vpm4eZbYz+XMvak|Z)FV@7T}+3<+Ko :{`=Md7#!iQ{2KaS3g2SnO' );
define( 'AUTH_SALT',        ';,OxiTWxERdXXp6|@~)4u%=-)NS|+>/`|O?n?DQI4e9%V%)~qwX,{1kB7#(UVw*A' );
define( 'SECURE_AUTH_SALT', 'c=3v3{uS${NfGKZ)DscN!Zh6yZI4bF$Wp#,j`Yj84xNA3FlE2==x4_7Q/[7X30t+' );
define( 'LOGGED_IN_SALT',   '%2{lrhPrV/]~azp]R{e]D9{#EzZtAZLT~~ju XDkJ?c}9Cx>(y/&4e$rlaLWl0+3' );
define( 'NONCE_SALT',       'Bk>J}+<Nqjp5{g,hoz7!hBlv%Ei_JA*5]q-$,Z: 7vTug9%NVxMIZ=a$6(0:5QF@' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
