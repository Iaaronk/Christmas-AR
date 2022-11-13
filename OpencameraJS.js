{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Bold;\f1\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red21\green45\blue142;\red255\green255\blue255;\red18\green34\blue46;
\red36\green0\blue255;\red67\green67\blue67;\red21\green117\blue58;\red2\green53\blue226;\red116\green0\blue151;
\red173\green71\blue4;}
{\*\expandedcolortbl;;\cssrgb\c10588\c25490\c62745;\cssrgb\c100000\c100000\c100000;\cssrgb\c8627\c17647\c23922;
\cssrgb\c20000\c0\c100000;\cssrgb\c33333\c33333\c33333;\cssrgb\c5882\c52157\c29020;\cssrgb\c0\c31765\c90980;\cssrgb\c53725\c3137\c65882;
\cssrgb\c74118\c35686\c0;}
\margl1440\margr1440\vieww9000\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl360\partightenfactor0

\f0\b\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 let
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 VIDEO\cf6 \strokec6 =
\f0\b \cf2 \strokec2 null
\f1\b0 \cf6 \strokec6 ;\cf4 \cb1 \strokec4 \

\f0\b \cf2 \cb3 \strokec2 let
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 CANVAS\cf6 \strokec6 =
\f0\b \cf2 \strokec2 null
\f1\b0 \cf6 \strokec6 ;\cf4 \cb1 \strokec4 \

\f0\b \cf2 \cb3 \strokec2 let
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 CONTEXT\cf6 \strokec6 =
\f0\b \cf2 \strokec2 null
\f1\b0 \cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\

\f0\b \cf2 \cb3 \strokec2 function
\f1\b0 \cf4 \strokec4  \cf7 \strokec7 main\cf4 \strokec4 (\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 CANVAS\cf6 \strokec6 =\cf8 \strokec8 document\cf6 \strokec6 .\cf7 \strokec7 getElementById\cf6 \strokec6 (\cf9 \strokec9 "myCanvas"\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 CONTEXT\cf6 \strokec6 =\cf5 \strokec5 CANVAS\cf6 \strokec6 .\cf7 \strokec7 getContext\cf6 \strokec6 (\cf9 \strokec9 "2d"\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 CANVAS\cf6 \strokec6 .\cf8 \strokec8 width\cf6 \strokec6 =\cf8 \strokec8 widow\cf6 \strokec6 .\cf8 \strokec8 innerWidth\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 CANVAS\cf6 \strokec6 .\cf8 \strokec8 height\cf6 \strokec6 =\cf8 \strokec8 window\cf6 \strokec6 .\cf8 \strokec8 innerHeight\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\
\cb3   
\f0\b \cf2 \strokec2 let
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 promise\cf6 \strokec6 =\cf8 \strokec8 navigator\cf6 \strokec6 .\cf8 \strokec8 mediaDevice\cf6 \strokec6 .\cf7 \strokec7 getUserMedia\cf6 \strokec6 (\{\cf8 \strokec8 video\cf6 \strokec6 :
\f0\b \cf2 \strokec2 true
\f1\b0 \cf6 \strokec6 \});\cf4 \cb1 \strokec4 \
\cb3   \cf8 \strokec8 promise\cf6 \strokec6 .\cf7 \strokec7 then\cf6 \strokec6 (
\f0\b \cf2 \strokec2 function
\f1\b0 \cf6 \strokec6 (\cf8 \strokec8 signal\cf6 \strokec6 )\{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf8 \cb3 \strokec8 VIDEO\cf6 \strokec6 =\cf8 \strokec8 document\cf6 \strokec6 .\cf7 \strokec7 createElement\cf6 \strokec6 (\cf9 \strokec9 "Video"\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cf8 \cb3 \strokec8 VIDEO\cf6 \strokec6 .\cf8 \strokec8 srcObject\cf6 \strokec6 =\cf8 \strokec8 signal\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cf8 \cb3 \strokec8 VIDEO\cf6 \strokec6 .\cf7 \strokec7 play\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\
\cf8 \cb3 \strokec8 VIDEO\cf6 \strokec6 .\cf8 \strokec8 onloadeddata\cf6 \strokec6 =
\f0\b \cf2 \strokec2 function
\f1\b0 \cf6 \strokec6 ()\{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf7 \strokec7 updateCanvas\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf6 \strokec6 \}).
\f0\b \cf2 \strokec2 catch
\f1\b0 \cf6 \strokec6 (
\f0\b \cf2 \strokec2 function
\f1\b0 \cf4 \strokec4 (\cf8 \strokec8 err\cf6 \strokec6 )\{\cf4 \cb1 \strokec4 \
\cb3     \cf7 \strokec7 alert\cf6 \strokec6 (\cf9 \strokec9 "Camera error: "\cf6 \strokec6 +\cf8 \strokec8 err\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \})\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\sl360\partightenfactor0

\f0\b \cf2 \cb3 \strokec2 function
\f1\b0 \cf4 \strokec4  \cf7 \strokec7 updateCanvas\cf4 \strokec4 (\cf6 \strokec6 )\{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 CONTEXT\cf6 \strokec6 .\cf7 \strokec7 drawImage\cf6 \strokec6 (\cf8 \strokec8 VIDEO\cf6 \strokec6 ,\cf10 \strokec10 0\cf6 \strokec6 ,\cf10 \strokec10 0\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf8 \strokec8 window\cf6 \strokec6 .\cf7 \strokec7 requestAnimationFrame\cf6 \strokec6 (\cf8 \strokec8 updateCanvas\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \cb1 \strokec4 \
}