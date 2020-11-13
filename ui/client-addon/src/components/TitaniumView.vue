<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="6">
        <sdk-list />
      </v-col>
      <v-col cols="6">
        <sdk-search />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SdkList from './SdkList'
import SdkSearch from './SdkSearch'

export default {
  components: {
    SdkList,
    SdkSearch
  }
}
</script>