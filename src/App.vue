<template>
  <section class="about">
    <div class="about__decoration">
      <div class="container">
        <div class="about__wrapper">
          <div class="about__section_1">
            <div class="about__info">
              <text-template
                v-bind:styles="'title-big title-white'"
                v-bind:element="FirstTemplate"
              ></text-template>
              <button-template class="decoration"
                color="white"
                v-bind:button="ButtonFirstTemplate"
              ></button-template>
            </div>
            <div class="about__image"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="about__section_2">
        <div class="services">
          <div class="services__wrapper">
            <service-card
              v-for="card in serviceCards"
              v-bind:key="card.id"
              v-bind:card="card"
            ></service-card>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /. about -->
  <section class="voting">
    <div class="container">
      <div class="voting__wrapper">
        <div class="voting__section">
          <text-template
            v-bind:element="SecondTemplate"
            styles="title-big"
          ></text-template>
        </div>
        <div class="voting__section">
          <div class="voting__form">
            <voting-card
              v-for="vote in votingCards"
              v-bind:key="vote.id"
              v-bind:vote="vote"
            ></voting-card>
          </div>
          <div class="voting__button">
            <ul class="voting__counter">
              <li class="title">Проголосовало:</li>
              <li class="title">
                <span class="title-num">1107</span>пользователей
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /. voting -->
  <section class="advantage">
    <div class="advantage__wrapper">
      <div class="advantage__section">
        <div class="advantage__decoration">
          <h2 class="advantage__title title-big">Почему с нами выгоднее?</h2>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="advantage__elements">
        <advantage-card
          v-for="skill in advantageCards"
          v-bind:key="skill.id"
          v-bind:skill="skill"
        ></advantage-card>
      </div>
    </div>
  </section>
  <!-- /. advantage -->
  <section class="portfolio">
    <div class="container">
      <div class="portfolio__wrapper">
        <div class="portfolio__section">
          <text-template
            v-bind:element="ThirdTemplate"
            styles="title-big"
          ></text-template>
        </div>
        <div class="portfolio__section">
          <div class="portfolio__slider slider">
            <slider-list v-bind:items="sliderCards"></slider-list>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /. portfolio -->
  <section class="clients">
    <div class="container">
      <div class="clients__wrapper">
        <div class="clients__section_1">
          <h2 class="clients__title title-big">Привлеченные клиенты</h2>
        </div>
        <div class="clients__section_2">
          <div class="clients__table board">
            <div class="board__information">
              <img class="board__logo" src="./assets/images/logo.svg" alt="#" />
              <p class="board__requisites">
                ООО "ПДВ" ИНН 7329023100 КПП 732901001 433405, Ульяновская обл.,
                Территория Портовой особой Экономической зоны, Проезд Первых
                Резидентов 3 Телефон: +7 8422 99 666 5 e-mail: info@pdv.ooo
              </p>
            </div>
            <!--  -->
            <table class="table">
              <thead class="table__header">
                <tr class="table__row table__row-name">
                  <th class="table__col-title title">Фото</th>
                  <th class="table__col-title title">Название</th>
                  <th class="table__col-title title">Производитель</th>
                  <th class="table__col-title title">Контакт</th>
                </tr>
              </thead>
              <tbody class="table__body">
                <table-item
                  v-for="table in tableTemplates"
                  v-bind:key="table.id"
                  v-bind:table="table"
                ></table-item>
              </tbody>
            </table>
            <!--  -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /. clients -->
  <section class="stage">
    <div class="container">
      <text-template
        v-bind:element="FourthTemplate"
        styles="title-big"
      ></text-template>
      <div class="stage__wrapper">
        <stage-item
          v-for="stage in stageCards"
          v-bind:key="stage.id"
          v-bind:stage="stage"
        ></stage-item>
      </div>
    </div>
  </section>
  <!-- /. stage -->
  <section class="partners">
    <div class="container">
      <text-template
        v-bind:element="FifthTemplate"
        styles="title-big"
      ></text-template>
      <div class="partners__wrapper">
        <partner-item
          v-for="partner in partnerCards"
          v-bind:key="partner.id"
          v-bind:partner="partner"
        ></partner-item>
      </div>
    </div>
  </section>
  <!-- /. partners -->
  <section class="workers">
    <div class="container">
      <text-template
        v-bind:element="SixthTemplate"
        styles="title-big"
      ></text-template>
      <div class="workers__wrapper">
        <worker-card
          v-for="worker in workerCards"
          v-bind:key="worker.id"
          v-bind:worker="worker"
        ></worker-card>
      </div>
    </div>
  </section>
  <!-- /. workers -->
  <section class="contacts">
    <div class="container">
      <text-template
        v-bind:element="SeventhTemplate"
        styles="title-big"
      ></text-template>
      <div class="contacts__wrapper">
        <div class="contacts__section_1">
          <div class="contacts__social social">
            <social-list
              v-for="social in socialTemplates"
              v-bind:key="social.id"
              v-bind:social="social"
            ></social-list>
          </div>
        </div>
        <div class="contacts__section_2 requisites">
          <div class="requisites__wrapper">
            <ul class="requisites__list">
              <requisite-item
                v-for="requisites in requisiteTemplates"
                v-bind:key="requisites.id"
                v-bind:requisites="requisites"
              ></requisite-item>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /. contacts -->
  <section class="feedback">
    <div class="container">
      <div class="feedback__wrapper">
        <div class="feedback__section_1">
          <text-template
            v-bind:element="EightTemplate"
            v-bind:styles="'title-big'"
          ></text-template>
          <form class="form" name="feedback">
            <div class="form__wrapper">
              <form-template></form-template>
            </div>
          </form>
        </div>
        <div class="feedback__section_2">
          <img
            class="feedback__image"
            src="./assets/images/cranes.png"
            alt="crans"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- /. feedback -->
  <section class="data">
    <div class="container">
      <text-template
        v-bind:element="NinthTemplate"
        styles="title-big"
      ></text-template>
      <div class="data__wrapper">
        <feedback-data></feedback-data>
      </div>
    </div>
  </section>
  <!-- /.data  -->
  <section class="overview">
    <div class="container">
      <div class="overview__wrapper">
        <div class="overview__text">
          <text-template
            v-bind:element="TenthTemplate"
            styles="title-big"
          ></text-template>
          <p class="overview__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit
            duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus
            turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque
            viverra mauris in. Pharetra convallis posuere morbi leo urna. Eget
            sit amet tellus cras adipiscing.
          </p>
        </div>
        <div class="overview__video">
          <iframe
            class="overview__iframe"
            src="https://www.youtube.com/embed/4UrCpchO1Os"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div class="overview__mask"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceCard from "@/components/ServiceCard";
import VotingCard from "@/components/VotingCard";
import AdvantageCard from "@/components/AdvantageCard";
import WorkerCard from "@/components/WorkerCard";
import TextTemplate from "@/components/TextTemplate";
import FormTemplate from "@/components/FeedbackForm/FormTemplate";
import ButtonTemplate from "@/components/ButtonTemplate";
import SliderList from "@/components/Slider/SliderList";
import SocialList from "@/components/SocialList";
import TableItem from "@/components/TableItem";
import StageItem from "@/components/StageItem";
import PartnerItem from "@/components/PartnerItem";
import RequisiteItem from "@/components/RequisiteItem";
import FeedbackData from "@/components/FeedbackData";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    "service-card": ServiceCard,
    "voting-card": VotingCard,
    "advantage-card": AdvantageCard,
    "text-template": TextTemplate,
    "button-template": ButtonTemplate,
    "table-item": TableItem,
    "stage-item": StageItem,
    "partner-item": PartnerItem,
    "worker-card": WorkerCard,
    "slider-list": SliderList,
    "social-list": SocialList,
    "requisite-item": RequisiteItem,
    "form-template": FormTemplate,
    "feedback-data": FeedbackData,
  },

  data() {
    return {
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
        {
          id: 3,
          title: "Выполненные работы",
          subtitle:
            "Мы собрали информацию по грузам, которые мы уже доставили.У нас специальный подход к каждому виду товаров.",
        },
        {
          id: 4,
          title: "Этапы поставки",
        },
        {
          id: 5,
          title: "Нам доверяют",
        },
        {
          id: 6,
          title: "Сотрудники компании",
        },
        {
          id: 7,
          title: "Наши контакты",
        },
        {
          id: 8,
          title: "Свяжитесь с нами",
        },
        {
          id: 9,
          title: "Ваши данные",
        },
        {
          id: 10,
          title: "Видео о нашей работе",
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
  methods: {
  },
  // /.METHODS
  computed: {
    ...mapState({
      serviceCards: "ServicesItems",
      votingCards: "VotingItems",
      advantageCards: "AdvantageItems",
      sliderCards: "SliderItems",
      tableTemplates: "TableItems",
      stageCards: "StageItems",
      partnerCards: "PartnerItems",
      workerCards: "WorkerItems",
      socialTemplates: "SocialItems",
      requisiteTemplates: "RequisiteItems",
    }),
    // /. state
    FirstTemplate() {
      return this.TextTemplate.find((item) => item.id == 1);
    },
    SecondTemplate() {
      return this.TextTemplate.find((item) => item.id == 2);
    },
    ThirdTemplate() {
      return this.TextTemplate.find((item) => item.id == 3);
    },
    FourthTemplate() {
      return this.TextTemplate.find((item) => item.id == 4);
    },
    FifthTemplate() {
      return this.TextTemplate.find((item) => item.id == 5);
    },
    SixthTemplate() {
      return this.TextTemplate.find((item) => item.id == 6);
    },
    SeventhTemplate() {
      return this.TextTemplate.find((item) => item.id == 7);
    },
    EightTemplate() {
      return this.TextTemplate.find((item) => item.id == 8);
    },
    NinthTemplate() {
      return this.TextTemplate.find((item) => item.id == 9);
    },
    TenthTemplate() {
      return this.TextTemplate.find((item) => item.id == 10);
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
.about__info {
  padding: 0 5px;
}
.about__section_1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.about__section_2 {
  position: relative;
  z-index: 2;
}
.about__decoration {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: auto;
    left: auto;
    right: 0;
    background-color: #0b7572;
    height: 790px;
    width: 600px;
  }
}
.about__image {
  border-radius: 20px 0px 0px 20px;
  min-width: 635px;
  min-height: 505px;
  z-index: 2;
  background-image: url(./assets/images/trailer-pulling.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
.voting__form {
  flex: 0 0 54%;
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
  margin-bottom: 120px;
}
.advantage__wrapper {
  position: relative;
  text-align: end;
  height: 453px;
  margin-bottom: 75px;

  background-image: url(./assets/images/tractor.png);
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
}
.advantage__section {
  position: absolute;
  width: 87%;
  top: 0;
  bottom: auto;
  left: 0;
  right: auto;
  height: 100%;
}
.advantage__decoration {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 170px 0 0;
  clip-path: polygon(0 0, 60% 0, 100% 100%, 0% 100%);
  background-color: #0b7572;
}
.advantage__title {
  color: #ffff;
}
.advantage__elements {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  :nth-last-child(-n + 2),
  :last-child {
    margin-bottom: 0;
  }
}
// /.advantage
.portfolio {
  margin-bottom: 120px;
}
.slider {
  :last-child {
    margin-right: 0;
  }
}
// /.portfolio
.clients {
  margin-bottom: 200px;
  position: relative;
  overflow: hidden;
  z-index: 2;
  &::before {
    content: url(./assets/images/decoration.svg);
    position: absolute;
    top: 0;
    left: 20%;
  }
}
.clients__wrapper {
  display: flex;
  padding: 85px 0;
  padding: 85px 60px 85px 60px;
  background-color: #0b7572;
}
.clients__section_1 {
  flex: 1 1 auto;
}
.clients__section_2 {
  flex: 0 0 51%;
  z-index: 2;
}
.clients__title {
  color: #fff;
  padding: 10px;
}
.board {
  width: 650px;
  min-height: 745px;
  border-radius: 8px;
  padding: 32px;
  background: #ffffff;
}
.board__logo {
  margin-right: 20px;
}
.board__information {
  display: flex;
  justify-content: space-between;
  padding-bottom: 32px;
  border-bottom: 1px solid #d7d7dd;
}
.board__requisites {
  max-width: 275px;
  font-size: 11px;
  padding: 5px;
}
.table {
  width: 100%;
  height: 100%;
  margin-top: 32px;
}
.table__image {
  width: 81px;
  height: 74px;
}
.table__row {
  display: grid;
  align-items: flex-start;
  grid-column-gap: 20px;
  grid-template-columns: auto repeat(3, 1fr);
  padding: 24px 16px;
}
.table__column {
  display: flex;
  flex-direction: column;
}
.table__row-name {
  padding: 15px 36px;
  display: grid;
  justify-items: center;
}
.table__col-title.table__col-title {
  color: #fff;
  font-size: 16px;
}
// /.clients
.stage {
  margin-bottom: 120px;
}
.stage__wrapper {
  display: flex;
  flex-direction: column;
}
// /.stage
.partners {
  margin-bottom: 130px;
}
.partners__wrapper {
  margin-top: 90px;
  display: flex;
  flex-wrap: wrap;
  :nth-child(4),
  :last-child {
    border-right: none;
  }
}
// /.partners
.workers {
  margin-bottom: 130px;
}
.workers__wrapper {
  margin-top: 72px;
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin: 0 30px 24px 0;
  }
  :nth-child(2n) {
    margin-right: 0;
  }
}
// /.workers
.contacts {
  margin-bottom: 140px;
}
.contacts__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 72px;
}
.contacts__section_1 {
  flex: 1 1 auto;
  margin-right: 20px;
}
.contacts__section_2 {
  flex: 0 0 62%;
}
.requisites__list {
  background: #f9f9fb;
  border-radius: 5px;
  padding: 40px 48px;
  :last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
}
// /.contacts
.feedback {
  margin-bottom: 130px;
}
.feedback__wrapper {
  display: flex;
  position: relative;
}
.feedback__section_1 {
  padding: 100px 56px;
  background-color: #0b7572;
  display: flex;
  flex: 0 0 55%;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
}
.feedback__section_1 .title-big {
  color: #fff;
}
.feedback__section_2 {
  display: flex;
  position: absolute;
  left: auto;
  right: 0;
  height: 100%;
  width: 100%;
}
.feedback__image {
  width: 100%;
}
.form__wrapper {
  display: flex;
  flex-direction: column;
}
.form__button {
  color: #0b7572;
  background-color: #fff;
  border-radius: 4px;
  padding: 16px;
  max-width: 205px;
  width: 100%;
  font-weight: 600;
  margin-top: 65px;
}

/* scroll line */
::-webkit-scrollbar {
  width: 10px;
  height: 12px;
  border-radius: 5px;
  background-color: #ccc;
}
/* scrollbar slider */
::-webkit-scrollbar-thumb {
  background-color: rgba(11, 117, 114, 0.788);
  border-radius: 5px;
}
// /.feedback
.data {
  margin-bottom: 100px;
}
.data__wrapper {
  background: #f9f9fb;
  border-radius: 5px;
  padding: 56px 48px;
}
.data__description.data__description {
  margin: 16px 0 0 0;
}
.data__button {
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  background: #0b7572;
  border-radius: 4px;
  padding: 20px;
}
.gallary__images {
  display: flex;
  :last-child {
    margin-right: 0;
  }
}
.gallary__title {
  margin-bottom: 24px;
}

// /.data
.overview {
  margin-bottom: 130px;
}
.overview__text {
  margin-bottom: 40px;
}
.overview__video {
  position: relative;
  padding: 0px 0px 56% 0px;
  overflow: hidden;
}
.overview__iframe {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
