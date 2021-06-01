import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  ExtraBeard: () => import('../../components/extra/beard.vue' /* webpackChunkName: "components/extra-beard" */).then(c => wrapFunctional(c.default || c)),
  ExtraBlush: () => import('../../components/extra/blush.vue' /* webpackChunkName: "components/extra-blush" */).then(c => wrapFunctional(c.default || c)),
  ExtraBowie: () => import('../../components/extra/bowie.vue' /* webpackChunkName: "components/extra-bowie" */).then(c => wrapFunctional(c.default || c)),
  ExtraDoctor: () => import('../../components/extra/doctor.vue' /* webpackChunkName: "components/extra-doctor" */).then(c => wrapFunctional(c.default || c)),
  ExtraGlasses: () => import('../../components/extra/glasses.vue' /* webpackChunkName: "components/extra-glasses" */).then(c => wrapFunctional(c.default || c)),
  ExtraHeadmic: () => import('../../components/extra/headmic.vue' /* webpackChunkName: "components/extra-headmic" */).then(c => wrapFunctional(c.default || c)),
  ExtraLapiz: () => import('../../components/extra/lapiz.vue' /* webpackChunkName: "components/extra-lapiz" */).then(c => wrapFunctional(c.default || c)),
  ExtraSunglasses: () => import('../../components/extra/sunglasses.vue' /* webpackChunkName: "components/extra-sunglasses" */).then(c => wrapFunctional(c.default || c)),
  EyeBad: () => import('../../components/eye/bad.vue' /* webpackChunkName: "components/eye-bad" */).then(c => wrapFunctional(c.default || c)),
  EyeBroken: () => import('../../components/eye/broken.vue' /* webpackChunkName: "components/eye-broken" */).then(c => wrapFunctional(c.default || c)),
  EyeConfused: () => import('../../components/eye/confused.vue' /* webpackChunkName: "components/eye-confused" */).then(c => wrapFunctional(c.default || c)),
  EyeHappy: () => import('../../components/eye/happy.vue' /* webpackChunkName: "components/eye-happy" */).then(c => wrapFunctional(c.default || c)),
  EyeHeart: () => import('../../components/eye/heart.vue' /* webpackChunkName: "components/eye-heart" */).then(c => wrapFunctional(c.default || c)),
  EyeLaugh: () => import('../../components/eye/laugh.vue' /* webpackChunkName: "components/eye-laugh" */).then(c => wrapFunctional(c.default || c)),
  EyeLeft: () => import('../../components/eye/left.vue' /* webpackChunkName: "components/eye-left" */).then(c => wrapFunctional(c.default || c)),
  EyeOpen: () => import('../../components/eye/open.vue' /* webpackChunkName: "components/eye-open" */).then(c => wrapFunctional(c.default || c)),
  EyeParche: () => import('../../components/eye/parche.vue' /* webpackChunkName: "components/eye-parche" */).then(c => wrapFunctional(c.default || c)),
  EyeRight: () => import('../../components/eye/right.vue' /* webpackChunkName: "components/eye-right" */).then(c => wrapFunctional(c.default || c)),
  EyeRoll: () => import('../../components/eye/roll.vue' /* webpackChunkName: "components/eye-roll" */).then(c => wrapFunctional(c.default || c)),
  EyeSad: () => import('../../components/eye/sad.vue' /* webpackChunkName: "components/eye-sad" */).then(c => wrapFunctional(c.default || c)),
  EyeSad2: () => import('../../components/eye/sad2.vue' /* webpackChunkName: "components/eye-sad2" */).then(c => wrapFunctional(c.default || c)),
  EyeSick: () => import('../../components/eye/sick.vue' /* webpackChunkName: "components/eye-sick" */).then(c => wrapFunctional(c.default || c)),
  EyeSmile: () => import('../../components/eye/smile.vue' /* webpackChunkName: "components/eye-smile" */).then(c => wrapFunctional(c.default || c)),
  EyeSmile2: () => import('../../components/eye/smile2.vue' /* webpackChunkName: "components/eye-smile2" */).then(c => wrapFunctional(c.default || c)),
  EyeSmirk: () => import('../../components/eye/smirk.vue' /* webpackChunkName: "components/eye-smirk" */).then(c => wrapFunctional(c.default || c)),
  EyeTired: () => import('../../components/eye/tired.vue' /* webpackChunkName: "components/eye-tired" */).then(c => wrapFunctional(c.default || c)),
  EyeTired2: () => import('../../components/eye/tired2.vue' /* webpackChunkName: "components/eye-tired2" */).then(c => wrapFunctional(c.default || c)),
  EyeUp: () => import('../../components/eye/up.vue' /* webpackChunkName: "components/eye-up" */).then(c => wrapFunctional(c.default || c)),
  Extra2Bigsweat: () => import('../../components/extra2/bigsweat.vue' /* webpackChunkName: "components/extra2-bigsweat" */).then(c => wrapFunctional(c.default || c)),
  Extra2Confetti: () => import('../../components/extra2/confetti.vue' /* webpackChunkName: "components/extra2-confetti" */).then(c => wrapFunctional(c.default || c)),
  Extra2Cry: () => import('../../components/extra2/cry.vue' /* webpackChunkName: "components/extra2-cry" */).then(c => wrapFunctional(c.default || c)),
  Extra2Moustache: () => import('../../components/extra2/moustache.vue' /* webpackChunkName: "components/extra2-moustache" */).then(c => wrapFunctional(c.default || c)),
  Extra2Sleep: () => import('../../components/extra2/sleep.vue' /* webpackChunkName: "components/extra2-sleep" */).then(c => wrapFunctional(c.default || c)),
  Extra2Sweat: () => import('../../components/extra2/sweat.vue' /* webpackChunkName: "components/extra2-sweat" */).then(c => wrapFunctional(c.default || c)),
  HatAuris: () => import('../../components/hat/auris.vue' /* webpackChunkName: "components/hat-auris" */).then(c => wrapFunctional(c.default || c)),
  HatAurisfluo: () => import('../../components/hat/aurisfluo.vue' /* webpackChunkName: "components/hat-aurisfluo" */).then(c => wrapFunctional(c.default || c)),
  HatBirthday: () => import('../../components/hat/birthday.vue' /* webpackChunkName: "components/hat-birthday" */).then(c => wrapFunctional(c.default || c)),
  HatChef: () => import('../../components/hat/chef.vue' /* webpackChunkName: "components/hat-chef" */).then(c => wrapFunctional(c.default || c)),
  HatCommvault: () => import('../../components/hat/commvault.vue' /* webpackChunkName: "components/hat-commvault" */).then(c => wrapFunctional(c.default || c)),
  HatCop: () => import('../../components/hat/cop.vue' /* webpackChunkName: "components/hat-cop" */).then(c => wrapFunctional(c.default || c)),
  HatDiego: () => import('../../components/hat/diego.vue' /* webpackChunkName: "components/hat-diego" */).then(c => wrapFunctional(c.default || c)),
  HatDoc: () => import('../../components/hat/doc.vue' /* webpackChunkName: "components/hat-doc" */).then(c => wrapFunctional(c.default || c)),
  HatElliemae: () => import('../../components/hat/elliemae.vue' /* webpackChunkName: "components/hat-elliemae" */).then(c => wrapFunctional(c.default || c)),
  HatNieve: () => import('../../components/hat/nieve.vue' /* webpackChunkName: "components/hat-nieve" */).then(c => wrapFunctional(c.default || c)),
  HatNoel: () => import('../../components/hat/noel.vue' /* webpackChunkName: "components/hat-noel" */).then(c => wrapFunctional(c.default || c)),
  HatPaypal: () => import('../../components/hat/paypal.vue' /* webpackChunkName: "components/hat-paypal" */).then(c => wrapFunctional(c.default || c)),
  HatSap: () => import('../../components/hat/sap.vue' /* webpackChunkName: "components/hat-sap" */).then(c => wrapFunctional(c.default || c)),
  HatSleep: () => import('../../components/hat/sleep.vue' /* webpackChunkName: "components/hat-sleep" */).then(c => wrapFunctional(c.default || c)),
  HatSmoking: () => import('../../components/hat/smoking.vue' /* webpackChunkName: "components/hat-smoking" */).then(c => wrapFunctional(c.default || c)),
  HatTigre: () => import('../../components/hat/tigre.vue' /* webpackChunkName: "components/hat-tigre" */).then(c => wrapFunctional(c.default || c)),
  HatTrinet: () => import('../../components/hat/trinet.vue' /* webpackChunkName: "components/hat-trinet" */).then(c => wrapFunctional(c.default || c)),
  HatUnited: () => import('../../components/hat/united.vue' /* webpackChunkName: "components/hat-united" */).then(c => wrapFunctional(c.default || c)),
  HatVisera: () => import('../../components/hat/visera.vue' /* webpackChunkName: "components/hat-visera" */).then(c => wrapFunctional(c.default || c)),
  HandBadge: () => import('../../components/hand/badge.vue' /* webpackChunkName: "components/hand-badge" */).then(c => wrapFunctional(c.default || c)),
  HandBeer: () => import('../../components/hand/beer.vue' /* webpackChunkName: "components/hand-beer" */).then(c => wrapFunctional(c.default || c)),
  HandCake: () => import('../../components/hand/cake.vue' /* webpackChunkName: "components/hand-cake" */).then(c => wrapFunctional(c.default || c)),
  HandCalc: () => import('../../components/hand/calc.vue' /* webpackChunkName: "components/hand-calc" */).then(c => wrapFunctional(c.default || c)),
  HandChef: () => import('../../components/hand/chef.vue' /* webpackChunkName: "components/hand-chef" */).then(c => wrapFunctional(c.default || c)),
  HandCreditcard: () => import('../../components/hand/creditcard.vue' /* webpackChunkName: "components/hand-creditcard" */).then(c => wrapFunctional(c.default || c)),
  HandCv: () => import('../../components/hand/cv.vue' /* webpackChunkName: "components/hand-cv" */).then(c => wrapFunctional(c.default || c)),
  HandDisk: () => import('../../components/hand/disk.vue' /* webpackChunkName: "components/hand-disk" */).then(c => wrapFunctional(c.default || c)),
  HandEs: () => import('../../components/hand/es.vue' /* webpackChunkName: "components/hand-es" */).then(c => wrapFunctional(c.default || c)),
  HandFace: () => import('../../components/hand/face.vue' /* webpackChunkName: "components/hand-face" */).then(c => wrapFunctional(c.default || c)),
  HandFernet: () => import('../../components/hand/fernet.vue' /* webpackChunkName: "components/hand-fernet" */).then(c => wrapFunctional(c.default || c)),
  HandFlagar: () => import('../../components/hand/flagar.vue' /* webpackChunkName: "components/hand-flagar" */).then(c => wrapFunctional(c.default || c)),
  HandFlagcl: () => import('../../components/hand/flagcl.vue' /* webpackChunkName: "components/hand-flagcl" */).then(c => wrapFunctional(c.default || c)),
  HandFlagco: () => import('../../components/hand/flagco.vue' /* webpackChunkName: "components/hand-flagco" */).then(c => wrapFunctional(c.default || c)),
  HandFlaghu: () => import('../../components/hand/flaghu.vue' /* webpackChunkName: "components/hand-flaghu" */).then(c => wrapFunctional(c.default || c)),
  HandFlagit: () => import('../../components/hand/flagit.vue' /* webpackChunkName: "components/hand-flagit" */).then(c => wrapFunctional(c.default || c)),
  HandFlagkr: () => import('../../components/hand/flagkr.vue' /* webpackChunkName: "components/hand-flagkr" */).then(c => wrapFunctional(c.default || c)),
  HandFlagmx: () => import('../../components/hand/flagmx.vue' /* webpackChunkName: "components/hand-flagmx" */).then(c => wrapFunctional(c.default || c)),
  HandFlagus: () => import('../../components/hand/flagus.vue' /* webpackChunkName: "components/hand-flagus" */).then(c => wrapFunctional(c.default || c)),
  HandFlagve: () => import('../../components/hand/flagve.vue' /* webpackChunkName: "components/hand-flagve" */).then(c => wrapFunctional(c.default || c)),
  HandFutbol: () => import('../../components/hand/futbol.vue' /* webpackChunkName: "components/hand-futbol" */).then(c => wrapFunctional(c.default || c)),
  HandKeys: () => import('../../components/hand/keys.vue' /* webpackChunkName: "components/hand-keys" */).then(c => wrapFunctional(c.default || c)),
  HandLgbt: () => import('../../components/hand/lgbt.vue' /* webpackChunkName: "components/hand-lgbt" */).then(c => wrapFunctional(c.default || c)),
  HandLoan: () => import('../../components/hand/loan.vue' /* webpackChunkName: "components/hand-loan" */).then(c => wrapFunctional(c.default || c)),
  HandLupa: () => import('../../components/hand/lupa.vue' /* webpackChunkName: "components/hand-lupa" */).then(c => wrapFunctional(c.default || c)),
  HandMate: () => import('../../components/hand/mate.vue' /* webpackChunkName: "components/hand-mate" */).then(c => wrapFunctional(c.default || c)),
  HandMouth: () => import('../../components/hand/mouth.vue' /* webpackChunkName: "components/hand-mouth" */).then(c => wrapFunctional(c.default || c)),
  HandPatin: () => import('../../components/hand/patin.vue' /* webpackChunkName: "components/hand-patin" */).then(c => wrapFunctional(c.default || c)),
  HandPeluche: () => import('../../components/hand/peluche.vue' /* webpackChunkName: "components/hand-peluche" */).then(c => wrapFunctional(c.default || c)),
  HandPlant: () => import('../../components/hand/plant.vue' /* webpackChunkName: "components/hand-plant" */).then(c => wrapFunctional(c.default || c)),
  HandRaise: () => import('../../components/hand/raise.vue' /* webpackChunkName: "components/hand-raise" */).then(c => wrapFunctional(c.default || c)),
  HandSee: () => import('../../components/hand/see.vue' /* webpackChunkName: "components/hand-see" */).then(c => wrapFunctional(c.default || c)),
  HandSide: () => import('../../components/hand/side.vue' /* webpackChunkName: "components/hand-side" */).then(c => wrapFunctional(c.default || c)),
  HandTea: () => import('../../components/hand/tea.vue' /* webpackChunkName: "components/hand-tea" */).then(c => wrapFunctional(c.default || c)),
  HandTeacup: () => import('../../components/hand/teacup.vue' /* webpackChunkName: "components/hand-teacup" */).then(c => wrapFunctional(c.default || c)),
  HandTenis: () => import('../../components/hand/tenis.vue' /* webpackChunkName: "components/hand-tenis" */).then(c => wrapFunctional(c.default || c)),
  HandThink: () => import('../../components/hand/think.vue' /* webpackChunkName: "components/hand-think" */).then(c => wrapFunctional(c.default || c)),
  HeadBase: () => import('../../components/head/base.vue' /* webpackChunkName: "components/head-base" */).then(c => wrapFunctional(c.default || c)),
  MouthBarbijo: () => import('../../components/mouth/barbijo.vue' /* webpackChunkName: "components/mouth-barbijo" */).then(c => wrapFunctional(c.default || c)),
  MouthGrim: () => import('../../components/mouth/grim.vue' /* webpackChunkName: "components/mouth-grim" */).then(c => wrapFunctional(c.default || c)),
  MouthHappy: () => import('../../components/mouth/happy.vue' /* webpackChunkName: "components/mouth-happy" */).then(c => wrapFunctional(c.default || c)),
  MouthHorror: () => import('../../components/mouth/horror.vue' /* webpackChunkName: "components/mouth-horror" */).then(c => wrapFunctional(c.default || c)),
  MouthIll: () => import('../../components/mouth/ill.vue' /* webpackChunkName: "components/mouth-ill" */).then(c => wrapFunctional(c.default || c)),
  MouthOh: () => import('../../components/mouth/oh.vue' /* webpackChunkName: "components/mouth-oh" */).then(c => wrapFunctional(c.default || c)),
  MouthPanic: () => import('../../components/mouth/panic.vue' /* webpackChunkName: "components/mouth-panic" */).then(c => wrapFunctional(c.default || c)),
  MouthSad: () => import('../../components/mouth/sad.vue' /* webpackChunkName: "components/mouth-sad" */).then(c => wrapFunctional(c.default || c)),
  MouthSad2: () => import('../../components/mouth/sad2.vue' /* webpackChunkName: "components/mouth-sad2" */).then(c => wrapFunctional(c.default || c)),
  MouthSide: () => import('../../components/mouth/side.vue' /* webpackChunkName: "components/mouth-side" */).then(c => wrapFunctional(c.default || c)),
  MouthSmile: () => import('../../components/mouth/smile.vue' /* webpackChunkName: "components/mouth-smile" */).then(c => wrapFunctional(c.default || c)),
  MouthTeeth: () => import('../../components/mouth/teeth.vue' /* webpackChunkName: "components/mouth-teeth" */).then(c => wrapFunctional(c.default || c)),
  MouthTongue: () => import('../../components/mouth/tongue.vue' /* webpackChunkName: "components/mouth-tongue" */).then(c => wrapFunctional(c.default || c)),
  MouthYum: () => import('../../components/mouth/yum.vue' /* webpackChunkName: "components/mouth-yum" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
