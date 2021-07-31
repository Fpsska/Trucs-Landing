<template>
  <div class="about">
    <div class="container">
      <div class="about__wrapper">
        <div class="about__section">
          <div class="about__background"></div>
          <div class="about__info">
            <text-template :element="FirstTemplate"></text-template>
            <button-template></button-template>
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
          <text-template :element="SecondTemplate"></text-template>
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
</template>


<script>
import ServiceCard from "@/components/ServiceCard";
import VotingCard from "@/components/VotingCard";
import TextTemplate from "@/components/TextTemplate";
import ButtonTemplate from "@/components/ButtonTemplate";
import AdvantageCard from "@/components/AdvantageCard";

export default {
  name: "App",
  components: {
    "service-card": ServiceCard,
    "voting-card": VotingCard,
    "advantage-card": AdvantageCard,
    "text-template": TextTemplate,
    "button-template": ButtonTemplate,
  },
  data() {
    return {
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
          title: "В какой сфере вы работаете?",
          subtitle:
            "Мы проводим опрос среди пользователей сайта, чтобы предоставить Вам информацию соответствующую сфере Вашей деятельности.",
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
          image: "money.svg",
        },
        {
          id: 3,
          title: "Iusto laborum distinctio magnam",
          subtitle:
            "Sunt dolores fuga recusandae repellat, numquam quas nemo dolore aliquam.",
          image: "document.svg",
        },
        {
          id: 4,
          title: "Dolores fuga recusandae repellat",
          subtitle:
            "Voluptatem tenetur laboriosam natus odio! Iusto laborum distinctio magnam debitis minus qui.",
          image: "planet.svg",
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
  },
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
.advantage {
  position: relative;
  margin-bottom: 200px;
  max-height: 453px;
}
.advantage__wrapper {
  text-align: end;
  position: relative;
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
  flex-wrap: wrap;
}
</style>
