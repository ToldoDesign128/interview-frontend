<script setup lang="ts">
import TodoInput from "./Components/TodoInput.vue";
import TodoList from "./Components/TodoList.vue";
</script>

<template>
    <div class="container">
        <div class="line">
            <div class="col-2 mt-5">
                <h1 class="line">Todo list</h1>
                <h5 class="line mt-1 mx-2">By Federico Toldo</h5>
                <div class="line mt-5">
                    <TodoInput />
                </div>
            </div>
            <div class="col-1 mt-5">
                <TodoList />
            </div>
        </div>
    </div>
</template>