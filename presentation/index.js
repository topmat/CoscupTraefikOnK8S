// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  traefik: require("../assets/figures/traefik.logo.svg"),
  huh: require("../assets/figures/huh.gif"),
  microservices: require("../assets/figures/microservices.png"),
  docker: require("../assets/figures/docker-logo.png"),
  rkt: require("../assets/figures/rkt.png"),
  mesos: require("../assets/figures/mesos-logo.png"),
  swarm: require("../assets/figures/swarm.png"),
  k8s: require("../assets/figures/kubernetes-logo.png"),
  rancher: require("../assets/figures/rancher-logo.png"),
  consul: require("../assets/figures/consul-logo.png"),
  etcd: require("../assets/figures/etcd-logo.png"),
  reverse: require("../assets/figures/traditionnalArchitecture.png"),
  reverseConfig: require("../assets/figures/traditionnalArchitecture.config.png"),
  stop: require("../assets/figures/stop.gif"),
  traefikArchitecture: require("../assets/figures/traefikArchitecture.png"),
  traefikInternalArchitecture: require("../assets/figures/traefikInternalArchitecture.png"),
  priere: require("../assets/figures/priere.jpg"),
  greatBut: require("../assets/figures/greatBut.gif"),
  letsEncrypt: require("../assets/figures/letsencrypt-logo.svg"),
  dockerImage: require("../assets/figures/docker.image.png"),
  reblochon: require("../assets/figures/reblochon.png"),
  mantl: require("../assets/figures/mantl-logo.png"),
  mantlBack: require("../assets/figures/mantl.back.svg"),
  cisco: require("../assets/figures/cisco-logo.png"),
  zenika: require("../assets/figures/zenika.logo.png"),
  containous: require("../assets/figures/containous.logo.png"),
  arrow: require("../assets/figures/arrow.png"),
  traefikSticker: require("../assets/figures/traefik.sticker.png"),
  camembert: require("../assets/figures/camembert.png"),
  morbier: require("../assets/figures/morbier.png"),
  raclette: require("../assets/figures/raclette.png"),
  money: require("../assets/figures/money.gif"),
  roquefort: require("../assets/figures/traefik-roquefort.png"),
  birthday: require("../assets/figures/traefik.birthday.jpg"),
  
  

  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#37ABC8",
  white: "#e2e2e2",
  secondary: "#1F2022",
  tertiary: "#e2e2e2",
  quartenary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Lobster Two"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={300} theme={theme}>

          <Slide bgColor="white">
            <Image src={images.traefik.replace("/", "")} margin="0px auto 20px" fit height="200" />
            <Heading size={3}  textColor="primary">
              Traefik on Kubernetes
            </Heading>
            <Heading size={6} textColor="primary" >
            用 Traefik 來簡化及統一網站流量管理
            </Heading>
            {/* <Heading size={1} textColor="primary">
              great again !
            </Heading> */}
            <Text margin="80" >Mat Chen — COSCUP 2018</Text>
          </Slide>

        <Slide>
          <Heading textColor="white" >
            $ whoami
            </Heading>
          <List fit textColor="white">
            <Appear><ListItem>從事軟體網站開發17年以上</ListItem></Appear>
            <Appear><ListItem>前Yahoo!工程師</ListItem></Appear>
            <Appear><ListItem>主力是後端</ListItem></Appear>
            <Appear><ListItem>對優化開發工作/軟體架構/DevOps有著高度的興趣</ListItem></Appear>
            <Appear><ListItem>CEO 伽博有限公司</ListItem></Appear>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3} fit textColor="black">
            Microservices - 微服務
            </Heading>
          <Image src={images.microservices.replace("/", "")} margin="20px auto 40px" fit />
        </Slide>

        <Slide bgColor="black">
          <Heading size={4} caps textColor="white">
            每個服務，都有著共通的事
            </Heading>
          <Image src={images.huh.replace("/", "")} margin="20px auto 20px" height="300" />
          <Heading size={2} caps textColor="white">
            reverse-proxy?
            </Heading>
        </Slide>


        <Slide bgColor="primary">
          <Heading size={1} caps textColor="white" lineHeight="200px">
            HTTPS 
            </Heading>
          <Heading size={1} caps textColor="white" lineHeight="200px">
            Routing
            </Heading>
            <Heading size={2} caps textColor="white" lineHeight="200px">
            Load-balancing
            </Heading>
        </Slide>

        <Slide bgColor="black">
          <Heading size={1} fit caps textColor="white">
            Reverse proxy 我們有那些選擇?
            </Heading>
          <List fit textColor="white">
            <Appear><ListItem>Cloud Ingress</ListItem></Appear>
            <Appear><ListItem>Apache Traffic server</ListItem></Appear>
            <Appear><ListItem>Nginx</ListItem></Appear>
            <Appear><ListItem>Traefik</ListItem></Appear>
            <Appear><ListItem>......</ListItem></Appear>
          </List>
        </Slide>


        <Slide bgColor="primary">
          <Heading size={2} caps textColor="white" lineHeight="200px">
            放入
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            reverse proxy
            </Heading>
        </Slide>

        <Slide bgColor="white" >
          <Image src={images.reverse.replace("/", "")} height="550" />
        </Slide>

        <Slide bgColor="white" >
          <Image src={images.reverseConfig.replace("/", "")} height="550" />
        </Slide>

        <Slide bgColor="black">
          <Image src={images.stop.replace("/", "")} margin="20px auto 20px" height="400" />
        </Slide>

        <Slide bgColor="white">
          <Image src={images.traefik.replace("/", "")} height="400" padding="20" />
          <Heading size={3}  textColor="primary">
            Traefik = Traffic
          </Heading>
        </Slide>

        <Slide bgColor="white">
          <Image src={images.traefikArchitecture.replace("/", "")} height="550" />
        </Slide>

        <Slide bgColor="white">
        <Heading size={3}  textColor="primary">
            Internal Architecture
          </Heading>        
          <Image src={images.traefikInternalArchitecture.replace("/", "")} height="550" />
        </Slide>

        <Slide>
          <Heading textColor="white" >
            功能 (持續增加中)
            </Heading>
          <List fit textColor="white">
            <Appear><ListItem>Single binary</ListItem></Appear>
            <Appear><ListItem>Small image & Fast</ListItem></Appear>
            <Appear><ListItem>Backends: Docker, Swarm, Kubernetes, Mesos / Marathon, Rancher, Consul, Etcd...</ListItem></Appear>
            <Appear><ListItem>Hot reloading</ListItem></Appear>
            <Appear><ListItem>Load-balancing: WRR, DRR</ListItem></Appear>
            <Appear><ListItem>Circuit breakers</ListItem></Appear>
            <Appear><ListItem>Websockets／HTTP2</ListItem></Appear>
            <Appear><ListItem>HTTPS</ListItem></Appear>
            <Appear><ListItem>Monitoring system:  Prometheus, DataDog or StatD</ListItem></Appear>

          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={1} caps fit textColor="primary" >
            Free, Automated
          </Heading>
          <Image src={images.letsEncrypt.replace("/", "")} width="800" />
          <Heading size={1} caps fit textColor="primary" >
            Certificate Authority
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit caps>
            16,868+ ★
            </Heading>
          <Heading size={2} fit caps>
            18M+ downloads
            </Heading>
          <Heading size={1} fit caps >
            900+ LGTM, 180+ 👷
            </Heading>
        </Slide>

        <Slide bgColor="black">
          <Heading size={1} textColor="white" >
            Demo
          </Heading>
          <Image fit src={images.priere.replace("/", "")} height="500" padding="20" />
        </Slide>

        <Slide>
          <Heading size={1}>
            Great!
          </Heading>
          <Image fit src={images.greatBut.replace("/", "")} height="400" padding="20" />
          <Text textColor="white" fit>But wait, how do you manage SSL certs?</Text>
        </Slide>


        <Slide>
          <Heading size={1}>
            Official image
          </Heading>
          <Text textColor="white">
            $ docker pull traefik
          </Text>
          <Image fit src={images.dockerImage.replace("/", "")} height="400" padding="20" />
        </Slide>

        <Slide>
          <Heading size={1} caps  >
            Traefik v1.1
          </Heading>
          <Image src={images.camembert.replace("/", "")} height="300" />
          <Heading size={1} caps  >
            camembert
          </Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3} fit>
            What's new?
          </Heading>
          <Heading size={1} fit caps textColor="primary">
            Cluster mode,
            Swarm mode
          </Heading>
          <Heading size={2} fit caps>
            Generic Mesos,
            Basic Auth
          </Heading>
          <Heading size={1} fit caps textColor="primary">
            Session affinity
          </Heading>
        </Slide>
 
        <Slide>
          <Heading size={1} caps  >
            Traefik v1.2
          </Heading>
          <Image src={images.morbier.replace("/", "")} height="200" />
          <Heading size={1} caps  >
            morbier
          </Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3} fit>
            What's new?
          </Heading>
          <Heading size={1} fit caps textColor="primary">
            Rancher, Eureka
          </Heading>
          <Heading size={2} fit caps>
            Prometheus,
            Healthchecks
          </Heading>
          <Heading size={1} fit caps textColor="primary">
            Traefik bug
          </Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={1} caps textColor="primary" >
            Traefik v1.3
          </Heading>
          <Image src={images.raclette.replace("/", "")} height="500" />
        </Slide>


        <Slide bgColor="white">
          <Heading size={3} fit>
            What's new?
          </Heading>
          <Heading size={1} fit caps textColor="primary">
            Basic auth frontend
          </Heading>
          <Heading size={2} fit caps>
            dynamodb
          </Heading>
          <Heading size={1} fit caps textColor="primary">
            dashboard filter
          </Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={1} caps textColor="primary" >
            Traefik v1.4
          </Heading>
          <Image src={images.roquefort.replace("/", "")} height="500" />
        </Slide>
        
        <Slide bgColor="white">
          <Heading size={2} fit caps>
            GRPC - Auth Forward
          </Heading>
          <Heading size={1} fit caps textColor="primary">
            SSL Redirect,
            Custom error pages
          </Heading>
          <Heading size={2} fit caps>
            Custom Headers,
            Datadog, Statd
          </Heading>
          <Heading size={1} fit caps textColor="primary">
            Proxy Protocol
          </Heading>
          <Heading size={2} fit caps>
            HSTS, New Doc...
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit caps>
            10.000+ ★
            </Heading>
          <Heading size={2} fit caps>
            18M+ downloads
            </Heading>
          <Heading size={1} fit caps >
            900+ LGTM, 180+ 👷
            </Heading>
        </Slide>

        <Slide bgColor="black">
          <Image src={images.birthday.replace("/", "")} height="600" />
        </Slide>

        <Slide >
          <Heading size={1} caps >
            We just
            </Heading>
          <Image src={images.money.replace("/", "")} height="300" />
          <Heading size={1} caps >
            raised €1M !
            </Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={1} caps textColor="primary" textSize="170">
            I have
            </Heading>
          <Image src={images.traefik.replace("/", "")} height="200" />
          <Heading size={1} caps textColor="primary">
            Stickers!
            </Heading>
        </Slide>

        <Slide >
          <Heading size={1} caps  >
            Thank you!
            </Heading>
          <Text >
            <Link href="https://traefik.io">traefik.io</Link>
          </Text>
          <Text  >
            <Link href="https://twitter.com/traefikproxy">@traefikproxy</Link>
          </Text>
          <Text >
            <Link href="https://github.com/emilevauge">@emilevauge</Link>
          </Text>
          <Text >
            <Link href="https://emilevauge.github.io/devFestToulouse2017">emilevauge.github.io/devFestToulouse2017</Link>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
