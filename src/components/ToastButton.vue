<template>
  <div class="toast-container">
    <button @click="showDefaultToast" class="toast-button default">
      Show Default Toast
    </button>
    <button @click="showSuccessToast" class="toast-button success">
      Show Success Toast
    </button>
    <button @click="showErrorToast" class="toast-button error">
      Show Error Toast
    </button>
    <button @click="showWarningToast" class="toast-button warning">
      Show Warning Toast
    </button>
    <button @click="showCustomToast" class="toast-button custom">
      Show Custom Toast
    </button>
  </div>
</template>
  
<script>
  import { useToast } from 'vue-toastification'
  
  export default {
    name: 'ToastButton',
    setup() {
      const toast = useToast()
      
      const showDefaultToast = () => {
        toast("This is a default toast notification!", {
          position: "top-center",
          timeout: 3980,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: false,
          draggablePercent: 0.1,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: false,
          icon: true,
          rtl: false
        })
      }
      
      const showSuccessToast = () => {
        toast.success("Operation completed successfully!", {
          position: "top-center",
          timeout: 3980,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: false,
          draggablePercent: 0.1,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: false,
          icon: true,
          rtl: false
        })
      }
      
      const showErrorToast = () => {
        toast.error("Oops! Something went wrong.", {
          position: "top-center",
          timeout: 3980,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: false,
          draggablePercent: 0.1,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: false,
          icon: true,
          rtl: false
        })
      }

      const showWarningToast = () => {
        toast.warning("Warning!", {
          position: "top-center",
          timeout: 3980,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: false,
          draggablePercent: 0.1,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: false,
          icon: true,
          rtl: false
        })
      }
      
      const showCustomToast = () => {
        toast.info("Here's some information for you", {
          position: "top-center",
          timeout: 3980,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: false,
          draggablePercent: 0.1,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: false,
          icon: true,
          rtl: false
        })
      }
      
      return {
        showDefaultToast,
        showSuccessToast,
        showErrorToast,
        showWarningToast,
        showCustomToast
      }
    }
  }
  </script>
  
  <style scoped>
  .toast-container {
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;
    margin: 2rem auto;
  }
  
  .toast-button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .toast-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .toast-button.default {
    background-color: #3498db;
  }
  
  .toast-button.success {
    background-color: #2ecc71;
  }
  
  .toast-button.error {
    background-color: #e74c3c;
  }

  .toast-button.warning {
    background-color: #ffdd1e;
  }

  .toast-button.custom {
    background-color: #9b59b6;
  }
  </style>