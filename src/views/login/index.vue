<template>
 <div class="login-wrap">
  <div>
    <div class="login-title">Welcome to Nothing Diagnostic</div>
    <el-form
    class="login"
    :label-position="labelPosition"
    :model="formCustom"
    ref="ruleFormRef"
    >
      <el-form-item label="Email" prop="Email">
        <el-input v-model="formCustom.Email" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="formCustom.password" />
      </el-form-item>
      <div class="forget-info-wrap">
        <div class="forget-info">Forget password</div>
      </div>
      <div class="submit_wrap">
        <el-button   @click="handleSubmit(ruleFormRef)" class="submit_btn" type="primary">Continue</el-button>
      </div>
    </el-form>
  </div>
 </div>
  
</template>

<script lang="ts" setup>
import { USERTYPE } from '../../utils/constant';
import { reactive, ref, onMounted} from 'vue'
import { userLogin, resetPassword } from '../../Api/api'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useRouter } from "vue-router"

const router = useRouter();
const labelPosition = ref<String>('top');
const ruleFormRef = ref<FormInstance>();

const formCustom = reactive({
  Email: '',
  password: '',
})
onMounted(() => {
  console.log('开始执行11111111')
})

const handleSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    debugger
    if (valid) {
      let result = await userLogin(formCustom);
      if (result.code === '200') {
        let { email, type } = result.data;
        let loginInfo = {
          isLogin: true,
          email,
          type
        };
        ElMessage('Login Successfully!')
        router.push({
          path: '/usersList',
          query: {
            type: USERTYPE.AfterSales.text
          }
      });
      } else {
        // todo 需要提示具体的错误信息
        ElMessage('Login Successfully!')
      }
    }
  })
}
</script>

<style scoped>
  .login-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 40px);
  }
  /* .login {
    width: 25%;
  } */
  .submit_wrap{
    text-align: center;
    width: 100%;
    margin-top: 20px;

  }
  .submit_btn {
    width: 100%;
    border-radius: 50px;
  }
  .forget-info {
    cursor: pointer;
    margin-bottom: 10px;
  }
  .forget-info-wrap {
    display: flex;
    justify-content: flex-end;
  }

  .login-title {
    margin-bottom: 50px;
    font-size: 20px;
  }
</style>