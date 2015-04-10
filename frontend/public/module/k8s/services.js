angular.module('k8s')
.service('k8sServices', function(k8sUtil, k8sEnum) {
  'use strict';

  this.clean = function(service) {
    k8sUtil.nullifyEmpty(service.metadata, ['annotations', 'labels']);
    k8sUtil.nullifyEmpty(service.spec, ['publicIPs']);
    k8sUtil.deleteNulls(service.metadata);
    k8sUtil.deleteNulls(service.spec);
  };

  this.getEmpty = function(ns) {
    return {
      metadata: {
        annotations: [],
        labels: [],
        name: null,
        namespace: ns || k8sEnum.DefaultNS,
      },
      spec: {
        targetPort: null,
        createExternalLoadBalancer: false,
        port: null,
        portalIP: null,
        protocol: 'TCP',
        proxyPort: null,
        publicIPs: [],
        selector: null,
        sessionAffinity: 'None',
      },
    };
  };

});
