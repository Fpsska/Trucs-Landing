<template>
  <div class="about">
    <div class="container">
      <div class="about__wrapper">
        <div class="about__section">
          <div class="about__background"></div>
          <div class="about__info">
            <text-template v-bind:element="FirstTemplate"></text-template>
            <button-template
              v-bind:button="ButtonFirstTemplate"
            ></button-template>
          </div>
          <img
            class="about__image"
            src="./assets/images/trailer-pulling.png"
            alt="trailer-pulling"
          />
        </div>
        <div class="about__section">
          <div class="services">
            <div class="services__wrapper">
              <service-card
                v-for="card in ServicesItems"
                v-bind:key="card.id"
                v-bind:card="card"
              ></service-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /. about -->
  <div class="voting">
    <div class="container">
      <div class="voting__wrapper">
        <div class="voting__section">
          <text-template v-bind:element="SecondTemplate"></text-template>
        </div>
        <div class="voting__section">
          <div class="voting__form">
            <voting-card
              v-for="vote in VotingItems"
              v-bind:key="vote.id"
              v-bind:vote="vote"
            ></voting-card>
          </div>
          <div class="voting__button">
            <div class="voting__counter">
              <span class="title">Проголосовало:</span>
              <!-- <button-template
                v-bind:class="{ 'title-num': !isActive }"
                v-bind:button="ButtonSecondTemplate"
              ></button-template> -->
              <span class="title"
                ><span class="title-num">1107</span> пользователей</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /. voting -->
  <div class="advantage">
    <div class="advantage__wrapper">
      <img
        class="advantage__background"
        src="./assets/images/tractor.png"
        alt="tractor"
      />
    </div>
    <div class="advantage__section">
      <div class="advantage__decoration">
        <h2 class="advantage__title title-big">Почему с нами выгоднее?</h2>
      </div>
    </div>
    <div class="container">
      <div class="advantage__elements">
        <advantage-card
          v-for="skill in AdvantageItems"
          v-bind:key="skill.id"
          v-bind:skill="skill"
        ></advantage-card>
      </div>
    </div>
  </div>
  <!-- /. advantage -->
  <div class="portfolio">
    <div class="container">
      <div class="portfolio__wrapper">
        <div class="portfolio__section">
          <text-template v-bind:element="ThirdTemplate"></text-template>
        </div>

        <div class="portfolio__section">
          <div class="portfolio__slider slider">
            <carousel-slide
              v-for="slide in SliderItems"
              v-bind:key="slide.id"
              v-bind:slide="slide"
            ></carousel-slide>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ServiceCard from "@/components/ServiceCard";
import VotingCard from "@/components/VotingCard";
import TextTemplate from "@/components/TextTemplate";
import ButtonTemplate from "@/components/ButtonTemplate";
import AdvantageCard from "@/components/AdvantageCard";
import CarouselSlide from "@/components/CarouselSlide";
// import Carousel from "vue-owl-carousel";

export default {
  name: "App",
  components: {
    "service-card": ServiceCard,
    "voting-card": VotingCard,
    "advantage-card": AdvantageCard,
    "text-template": TextTemplate,
    "button-template": ButtonTemplate,
    "carousel-slide": CarouselSlide,
    // carousel: Carousel,
  },
  data() {
    return {
      isActive: false,
      ServicesItems: [
        {
          id: 1,
          image: "icon-1.svg",
          title: "Поиск производителей по товару",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
        },
        {
          id: 2,
          image: "icon-2.svg",
          title: "Поиск конкретного производителя",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
        },
        {
          id: 3,
          image: "icon-3.svg",
          title: "Доставка образцов товаров",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
        },
      ],
      VotingItems: [
        {
          id: 1,
          title: "Я работаю на произвостве",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
          id: 2,
          title: "Я поставляю товары",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
          id: 3,
          title: "Я помогаю подобрать оборудование",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
      ],
      TextTemplate: [
        {
          id: 1,
          title: "Поставщик Дальнего Востока",
          subtitle:
            "Наши клиенты получают полный спектр услуг по работе с Китаем. Начиная с подбора производителя заканчивая доставкой товара до двери. Настолько прозрачных сделок с Китаем вы еще не осуществляли.",
        },
        {
          id: 2,
          title: "Выполненные работы",
          subtitle:
            "Мы проводим опрос среди пользователей сайта, чтобы предоставить Вам информацию соответствующую сфере Вашей деятельности.",
        },
        {
          id: 3,
          title: "В какой сфере вы работаете?",
          subtitle:
            "Мы собрали информацию по грузам, которые мы уже доставили.У нас специальный подход к каждому виду товаров.",
        },
      ],
      AdvantageItems: [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
          image: "lock.svg",
        },
        {
          id: 2,
          title: "Consectetur adipiscing elit",
          subtitle:
            "Quisquam reprehenderit illo nobis vel, aliquam consequuntur eos cum voluptatum sit maxime.",
          image: "document.svg",
        },
        {
          id: 3,
          title: "Iusto laborum distinctio magnam",
          subtitle:
            "Sunt dolores fuga recusandae repellat, numquam quas nemo dolore aliquam.",
          image: "money.svg",
        },
        {
          id: 4,
          title: "Dolores fuga recusandae repellat",
          subtitle:
            "Voluptatem tenetur laboriosam natus odio! Iusto laborum distinctio magnam debitis minus qui.",
          image: "planet.svg",
        },
      ],
      SliderItems: [
        {
          id: 1,
          image: "portfolio-1.png",
          title: "Станки и оборудование",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
          price: "20 000",
        },
        {
          id: 2,
          image: "portfolio-2.png",
          title: "Компоненты и запчасти",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
          price: "18 000",
        },
        {
          id: 3,
          image: "portfolio-3.png",
          title: "Квартирные переезды",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
          price: "22 000",
        },
      ],
      ButtonTemplate: [
        {
          id: 1,
          text: "Узнать больше",
        },
        {
          id: 2,
          text: "1107 пользователей",
        },
      ],
    };
  },
  // /.DATA
  computed: {
    FirstTemplate() {
      return this.TextTemplate.find((item) => item.id == 1);
    },
    SecondTemplate() {
      return this.TextTemplate.find((item) => item.id == 2);
    },
    ThirdTemplate() {
      return this.TextTemplate.find((item) => item.id == 3);
    },
    ButtonFirstTemplate() {
      return this.ButtonTemplate.find((item) => item.id == 1);
    },
    ButtonSecondTemplate() {
      return this.ButtonTemplate.find((item) => item.id == 2);
    },
  },
  // /.COMPUTED
};
</script>

<style lang="scss">
.about {
  position: relative;
}
.about__wrapper {
  display: flex;
  flex-direction: column;
  padding-top: 110px;
}
.about__section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.about__background {
  width: 600px;
  background-color: #0b7572;
  min-height: 780px;
  position: absolute;
  top: 0;
  bottom: auto;
  left: auto;
  right: 0;
}
.about__image {
  border-radius: 20px 0px 0px 20px;
  min-width: 635px;
  z-index: 2;
}
// /.about
.services {
  z-index: 2;
  padding-top: 70px;
}
.services__wrapper {
  z-index: 2;
  display: flex;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  border-radius: 20px;
  padding: 60px 0;
  :last-child {
    border-right: none;
  }
}
.services__card {
  z-index: 2;
}
// /.services
.voting {
  margin: 120px 0 100px 0;
}
.voting__wrapper {
  display: flex;
  flex-direction: column;
}
.voting__section {
  display: flex;
}
.voting__button {
  margin: 0 auto;
}
.voting__counter {
  width: auto;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #ffce50;
}
// /.voting
.advantage {
  position: relative;
  margin-bottom: 120px;
}
.advantage__wrapper {
  text-align: end;
  position: relative;
  max-height: 453px;
  margin-bottom: 75px;
}
.advantage__section {
  position: absolute;
  width: 86%;
  top: 0;
  bottom: auto;
  left: 0;
  right: auto;
}
.advantage__decoration {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 170px 0 0;
  clip-path: polygon(0 0, 60% 0, 100% 100%, 0% 100%);
  background-color: #0b7572;
  min-height: 453px;
}
.advantage__background {
  background-repeat: no-repeat;
  background-size: cover;
}
.advantage__title {
  color: #ffff;
}
.advantage__elements {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
// /.advantage
.slider {
  display: flex;
  :last-child {
    margin-right: 0;
  }
}
</style>
