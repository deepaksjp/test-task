import React from "react";
import { Box, Container, IconButton, Typography, styled } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { CustomInput } from "../../component/CustomInput/CustomInput";
import { PrimaryButton } from "../../component/BaseButton/BaseButton";
import { loginSchema } from "../../utils/Auth.validation";
import { User } from "../../component/user/User";

const StyledForm = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
}));

export const Login = () => {
  const navigate = useNavigate();
  const user = User;
  const [showPassword, setShowPassword] = React.useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const lowercaseEmail = values.email.toLowerCase();
      if (lowercaseEmail) {
        let response = user?.find((value) => lowercaseEmail === value.email);
        if (response?.email && values?.password === response?.password) {
          const token = Math.floor(Math.random() * 10000);
          localStorage.setItem("token", token);
          formik.resetForm();
          navigate("/dashboard");
        } else {
          formik.setFieldError("email", "credentials not match");
          formik.setFieldError("password", "credentials not match");
        }
      } else {
        formik.setFieldError("email", "User already exists");
      }
    },
  });
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Container maxWidth="xs">
          <Box
            sx={{
              margin: "0px auto",
              padding: (theme) => theme.spacing(2),
              borderRadius: (theme) => theme.shape.borderRadius,
              border: (theme) => `1px solid ${theme.palette.divider}`,
              color: (theme) => theme.palette.text.primary,
              display: "flex",
              flexDirection: "column",
              gap: (theme) => theme.spacing(2),
            }}
          >
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Login
            </Typography>
            <StyledForm>
              <CustomInput
                name="email"
                labelText="Email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                fullWidth
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <CustomInput
                name="password"
                labelText="Password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                fullWidth
                value={formik.values.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                endIcon={
                  <>
                    <IconButton
                      onClick={handleTogglePassword}
                      sx={{
                        position: "absolute",
                        right: 0,
                        top: "50%",
                        width: "auto",
                        height: "1rem",
                        transform: "translateY(-50%)",
                      }}
                    >
                      {!showPassword ? (
                        <VisibilityOff sx={{ width: "1rem" }} />
                      ) : (
                        <Visibility sx={{ width: "1rem" }} />
                      )}
                    </IconButton>
                  </>
                }
              />
              <PrimaryButton
                type="submit"
                variant="contained"
                onClick={formik.handleSubmit}
                fullWidth
              >
                Login
              </PrimaryButton>
            </StyledForm>
            <Typography variant="body2">
              You don't have an account? <Link to={"/signup"}>Sign up</Link>
            </Typography>
          </Box>
        </Container>
      </Box>
      hi
    </>
  );
};
