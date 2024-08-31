import { ImageResource } from '../types/imageTypes.js';

/* CrManzana */
const fourPanel = 'Images/CrManzana/SPOILER_xolomon4k.png';
const fourPanelSketch = 'Images/CrManzana/SPOILER_qST2l2_0.jpg';
/* funayfunay */
const reactive = 'Images/funayfunay/melscomm_IDLE.png';
const reactiveTalk = 'Images/funayfunay/melscomm_TALK.png';
/* KingBumby */
const scuffGrem = 'Images/KingBumby/scuffgremlin_melsmustscream.png';
const scuffGremTalk = 'Images/KingBumby/scuffgremlin_melsmustscream_talk_open.png';
/* KingofDawn0 */
const sakuraMels = 'Images/KingofDawn0/background.PNG';
const sakuraMelsNoBackground = 'Images/KingofDawn0/no_background.PNG';
/* Makishupy */
const falling = 'Images/Makishupy/whatsAppImage.jpeg';
const originalModel = 'Images/Makishupy/closed_IMG_2370.png';
const originalModelOpenMouth = 'Images/Makishupy/open_IMG_2371.png';
const animatedSundae = 'Images/Makishupy/Ice_cream_Animation.mp4';
/* suamingVT */
const kaguraMels = 'Images/suamingVT/mel_kagura_bachi.png';
/* WaNN */
const tangoWithSol = 'Images/WaNN/Sol_and_Mel.png';
const tangoWithSolChibi = 'Images/WaNN/Sol_and_Mel_chibi.png';
/* tuliblu */
const chibi = 'Images/tuliblu/Xolo_2.png';
/* MelsMustScream */
const dawnling = 'Images/MelsMustScream/Dawnling.png';
const persona = 'Images/MelsMustScream/shenanigans.png';
const personaVideo = 'Images/MelsMustScream/persona5_v1.mp4';
const sundae = 'Images/MelsMustScream/1112.png'
/* kyung.mp3 */
const chibiTrio = 'Images/kyung_mp3/chibiTrio.png';
/* franbolt */
const melsDio = 'Images/franbolt/SPOILER_2.png'

const imageData: Array<ImageResource> = [
  {
    img: chibi,
    imgVariants: [chibi],
    title: 'Chibi~',
    artist: '@tuliblu',
    artistWebsite: 'https://x.com/tuliblu/status/1805303849193742721'
  },
  {
    img: kaguraMels,
    imgVariants: [kaguraMels],
    title: 'kaguraMels',
    artist: '@suamingVT',
    artistWebsite: 'https://x.com/suamingVT'
  },
  {
    img: falling,
    imgVariants: [falling],
    title: 'Falling for Ice Cream',
    artist: '@Makishupy',
    artistWebsite: 'https://x.com/Makishupy',
    cols: 2
  },
  {
    img: scuffGrem,
    imgVariants: [scuffGrem, scuffGremTalk],
    title: 'Scuff Gremlin',
    artist: '@KINGBumby',
    artistWebsite: 'https://x.com/KINGBumby',
    description: 'This is an example of a description text',
  },
  {
    img: fourPanel,
    imgVariants: [fourPanel, fourPanelSketch],
    title: 'Your Honor This is a Denny\'s',
    artist: '@CrManzana',
    artistWebsite: 'https://x.com/CrManzana'
  },
  {
    img: reactive,
    imgVariants: [reactive, reactiveTalk],
    title: 'Official PNGtuber',
    artist: '@funayfunay',
    artistWebsite: 'https://x.com/funayfunay'
  },
  {
    img: sakuraMels,
    imgVariants: [sakuraMels, sakuraMelsNoBackground],
    title: 'Sakura Mels',
    artist: '@KingofDawn0',
    artistWebsite: 'https://x.com/KingofDawn0'
  },
  {
    img: chibiTrio,
    imgVariants: [chibiTrio],
    title: 'Trio Shenanigans',
    artist: 'kyung.mp3',
    artistWebsite: 'https://www.instagram.com/kyung.mp3/',
  },
  {
    img: tangoWithSol,
    imgVariants: [tangoWithSol, tangoWithSolChibi],
    title: 'Ice cream so sweet, it makes my heart dance',
    artist: '@WaNN',
  },
  {
    img: originalModel,
    imgVariants: [originalModel, originalModelOpenMouth],
    title: 'Original PNG Model',
    artist: '@Makishupy',
    artistWebsite: 'https://x.com/Makishupy'
  },
  {
    img: dawnling,
    imgVariants: [dawnling],
    title: 'Dawnling',
    artist: '@MelsMustScream',
    artistWebsite: 'https://x.com/MelsMustScream'
  },
  {
    img: persona,
    imgVariants: [persona, personaVideo],
    title: 'Persona!',
    artist: 'Multiple Artist',
    description: 'Taking the original image by suamingVT, Seedy and a friend did some editing and voila'
  },
  {
    img: melsDio,
    imgVariants: [melsDio],
    title: 'But it was ME, DIO!',
    artist: '@franbolt',
    artistWebsite: 'https://www.twitch.tv/franbolt'
  },
  {
    img: sundae,
    imgVariants: [sundae],
    title: 'A Sweet Start',
    artist: '@MelsMustScream',
    artistWebsite: 'https://x.com/MelsMustScream',
    description: 'The original channel logo!'
  },
  {
    img: animatedSundae,
    imgVariants: [animatedSundae],
    title: 'Animated Sundae',
    artist: '@Makishupy',
    artistWebsite: 'https://x.com/Makishupy'
  }
];

export { imageData };