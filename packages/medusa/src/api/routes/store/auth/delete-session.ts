/**
 * @oas [delete] /store/auth
 * operationId: "DeleteAuth"
 * summary: "Customer Log out"
 * description: "Delete the current session for the logged in customer."
 * x-authenticated: true
 * x-codegen:
 *   method: deleteSession
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE 'https://medusa-url.com/store/auth' \
 *       -H 'Cookie: connect.sid={sid}'
 * security:
 *   - cookie_auth: []
 * tags:
 *   - Auth
 * responses:
 *  "200":
 *    description: OK
 *  "400":
 *    $ref: "#/components/responses/400_error"
 *  "401":
 *    $ref: "#/components/responses/unauthorized"
 *  "404":
 *    $ref: "#/components/responses/not_found_error"
 *  "409":
 *    $ref: "#/components/responses/invalid_state_error"
 *  "422":
 *    $ref: "#/components/responses/invalid_request_error"
 *  "500":
 *    $ref: "#/components/responses/500_error"
 */
export default async (req, res) => {
  req.session.jwt_store = {}
  res.json({})
}
