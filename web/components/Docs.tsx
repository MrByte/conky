import { Documentation } from '../utils/doc-utils'
import { Link } from 'react-feather'

export interface DocsProps {
  docs: Documentation
  braces: boolean
  assign: boolean
}

export default function Docs({ docs, braces, assign }: DocsProps) {
  return (
    <div className="prose dark:prose-invert prose-lg lg:prose-xl">
      <div dangerouslySetInnerHTML={{ __html: docs.desc }} />
      <div>
        {docs.values.map((doc) => (
          <div
            id={doc.name}
            key={doc.name}
            className="scroll-mt-16 target:bg-rose-300 target:dark:bg-rose-900 hover:bg-slate-100 dark:hover:bg-slate-800 my-4"
          >
            <div className="flex">
              <div className="px-2 py-3">
                <a href={`#${doc.name}`}>
                  <Link size={20} />
                </a>
              </div>
              <div className="flex-col p-1">
                <div>
                  {braces && <code>$&#123;</code>}
                  <code className="text-lg p-1 mx-1 bg-fuchsia-200 dark:bg-fuchsia-900 font-bold">
                    {doc.name}
                  </code>
                  {typeof doc.args != 'undefined' && doc.args.length > 0 && (
                    <>
                      {assign && <code>=</code>}
                      <em>
                        {doc.args.map((arg) => (
                          <code
                            className="text-lg p-1 mx-1 bg-slate-200 dark:bg-slate-800"
                            key={arg}
                          >
                            {arg}
                          </code>
                        ))}
                      </em>
                    </>
                  )}
                  {braces && <code>&#125;</code>}
                </div>
                <div
                  className="py-2"
                  dangerouslySetInnerHTML={{ __html: doc.desc }}
                />
                {typeof doc.default != 'undefined' && (
                  <div>
                    Default:{' '}
                    <code className="px-1 mx-1 bg-slate-200 dark:bg-slate-800">
                      {doc.default}
                    </code>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}