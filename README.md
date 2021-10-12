# Gnuboard masonry, smartphoto Gallery Skin
gnuboard gallery skin with masonry, smartphoto library

## Feature
1. 이미지가 pinterest디자인에서 4개의 column으로 이루어져 있습니다.
2. 이미지를 클릭하면 smartphoto library처럼 이미지가 크게 보이고, 좌우로 넘길 수 있습니다.
3. 관리자로 로그인을 한 뒤에 이미지를 클릭하면 제목, 내용을 수정할 수 있습니다.

## Demo
링크 : http://ksasac.site/bbs/board.php?bo_table=gallery_test

<img src="https://user-images.githubusercontent.com/59159410/136878143-d6a32816-cfcf-4564-98c8-23eca754b1e2.png" width="400" align="left" >
<img src="https://user-images.githubusercontent.com/59159410/136878177-bb547924-8d2f-4973-a62d-f431dba48ff2.png" width="400" >

(좌) 갤러리 사진 (우) 이미지를 클릭했을 때의 사진

## Installation
```shell
# clone the repo
git clone https://github.com/jiwon79/gnuboard-masonry-gallery-skin
```                                                                                                                                    
github의 파일을 clone한 뒤에 폴더 그대로 그누보드가 설치되어있는 웹에 /skin/board 폴더에 붙여넣기를 해주면 됩니다.

## Usage
### column의 수를 바꾸고 싶은 경우
```shell
#bo_gall .gall_box {
  width: 23%;
  margin: 1%;
  position: relative;
}

#bo_gall .gall_sizer {
  width: 25%
}
```
#bo_gall .gall_sizer의 width값을 100/n%의 값으로 주고, 그에 맞추어서 #bo_gall .gall_box의 width와 margin을 수정하면 됩니다.

### image간의 margin을 바꾸고 싶은 경우
#bo_gall .gall_box에서 width + margin-left + margin-right의 값이 #bo_gall .gall_sizer의 width가 되도록 유지하면서 width와 margin을 수정하면 됩니다.

## Used Library
- Masonry.js : https://github.com/desandro/masonry
- Smartphoto.js : https://github.com/appleple/SmartPhoto

## Contact Us
수정할 것이 있다면 pull & request로, 문의할 것이 있다면 아래의 이메일로 연락 부탁드립니다.

mail: jiiwon79@gmail.com

## Lincense
This project is licensed under the terms of the MIT license.
