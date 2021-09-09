<template>
  <tr class="table__row">
    <td>
      <img
        class="table__image"
        v-bind:src="require(`@/assets/images/${table.image}`)"
        alt="photo"
      />
    </td>
    <td class="table__column">
      <span class="table__name">{{ table.name }}</span>
      <span class="table__price">{{ table.price }} руб.</span>
    </td>
    <td class="table__column">
      <span class="table__producer title">{{ table.producer }}</span>
      <span class="table__address">{{ table.address }}</span>
      <img class="table__rating" v-bind:src="require(`@/assets/images/${table.rating}`)" alt="rating">
    </td>
    <td class="table__column">
      <span class="table__user title">{{ table.user }}</span>
      <span class="table__profession">{{ table.profession }}</span>
      <a class="table__number" href="tel:{+ 7 (495) 765 33 22}">
        {{ table.number }}
      </a>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    table: {
      type: Object,
    },
  },
};
</script>

<style tang="scss" scoped>
.title {
  font-size: 14px;
}
.table__image {
  width: 80px;
  height: 75px;
  object-fit: cover;
}
.table__price {
  color: #363738;
  font-weight: 600;
}
.table__user {
  line-height: 18.9px;
}
.table__name {
  margin-bottom: 10px;
}
.table__profession {
  margin: 10px 0;
}
.table__address {
  margin: 10px 0;
}
.table__producer {
  line-height: 18.9px;
}
.table__rating {
  object-fit: cover;
  height: 11px;
  width: 75px;
}
</style>