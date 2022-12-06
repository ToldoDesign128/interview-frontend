<script setup lang="ts">
import TodoInput from "./Components/TodoInput.vue";
import TodoList from "./Components/TodoList.vue";
</script>

<template>
    <div class="container">
        <div class="grid v-between">
            <div class="col-50 mt-5">
                <h1 class="grid">Todo list</h1>
                <h5 class="grid mt-1 mx-2">By Federico Toldo</h5>
                <div class="col-100 mt-5">
                    <TodoInput />
                </div>
            </div>
            <div class="col-50 mt-5">
                <TodoList />
            </div>
        </div>
    </div>
</template>