ARG BASE_IMAGE=nginx:1.27-alpine

FROM ${BASE_IMAGE}

LABEL maintainer="maintainer@knowhowto.dev"

ARG VCS_REFERENCE
ARG BUILD_VERSION_REFERENCE

ENV APPLICATION_VCS_REFERENCE=${VCS_REFERENCE}
ENV APPLICATION_BUILD_VERSION=${BUILD_VERSION_REFERENCE}

# Copy pre-built VitePress output into Nginx html root.
# Build produces output at docs/.vitepress/dist/
COPY docs/.vitepress/dist/ /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
