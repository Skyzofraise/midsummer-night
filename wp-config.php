<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'midsummer-night' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'root' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Xnsx>,4<0XUanUnfB3B^X,TJQHV&V:G1*$RsZR&eu[*vRO0<@#4TjR]>+`,&?`/!' );
define( 'SECURE_AUTH_KEY',  '3%1o8Trf5F[NYrk&=9)Do#X&2+UcH @sD3IwkT93;IJV[!{[2:Zm!=P?zC Bj=rQ' );
define( 'LOGGED_IN_KEY',    'Rl#H!|-RvM/:exGLL5;z73bP%(CS6 3POXo=m?Ab4S@k58rfr*FKSfD+W/Mkw8e%' );
define( 'NONCE_KEY',        '1+Ky:z%;p+7s~mB[=)|hyKembMuJ6n#]{tk&Md2S@[.0k*Q}tSh^@@4/Q!OU5#J[' );
define( 'AUTH_SALT',        'EV)J0]T[sqxTy3e!l3%?bDV<wvH:h{WfG| 4u>@oU|uoYj~BI%na+.T$bM[ncd3D' );
define( 'SECURE_AUTH_SALT', 'I &Mb4mJ%Zh=.fAL~3_7`lOFuJ4th7d7wTBnQ$w qa3G+=GNLUw&N8q1}akv;ek:' );
define( 'LOGGED_IN_SALT',   '1x$D Z`/TOqUWmqM?YI!$y1LL?FTacmD#+wzXF9x28g|^/6)BOW-k6GReCvNX9*!' );
define( 'NONCE_SALT',       'D$(,l;kO04|JR,+CRS8/s|JC9n!JI8 mO@XR1&5Ak0jIX-W+:jd+{m8wytxrK UJ' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
