import request from '@/utils/request'

// 创建视频内容分析任务
export function createVideoTask(assetId,tenantId,type) {
  return request({
    url: `/videoTask/asset/${assetId}/tenant/${tenantId}/type/${type}/label`,
    method: 'put',
  })
}
