const ERRNO_SUCCESS = 0;
const ERRNO_BADF = 8;
const ERRNO_NOSYS = 52;

const FD_STDOUT = 1;
const FD_STDERR = 2;

export interface Wasi extends WebAssembly.ModuleImports {
  args_get: () => number;
  args_sizes_get: () => number;
  clock_res_get: () => number;
  clock_time_get: () => number;
  environ_get: () => number;
  environ_sizes_get: () => number;
  fd_advise: () => number;
  fd_allocate: () => number;
  fd_close: () => number;
  fd_datasync: () => number;
  fd_fdstat_get: () => number;
  fd_fdstat_set_flags: () => number;
  fd_fdstat_set_rights: () => number;
  fd_filestat_get: () => number;
  fd_filestat_set_size: () => number;
  fd_filestat_set_times: () => number;
  fd_pread: () => number;
  fd_prestat_dir_name: () => number;
  fd_prestat_get: () => number;
  fd_pwrite: () => number;
  fd_read: () => number;
  fd_readdir: () => number;
  fd_renumber: () => number;
  fd_seek: () => number;
  fd_sync: () => number;
  fd_tell: () => number;
  fd_write: (
    fd: number,
    iovsOffset: number,
    iovsLength: number,
    nwrittenOffset: number
  ) => number;
  path_create_directory: () => number;
  path_filestat_get: () => number;
  path_filestat_set_times: () => number;
  path_link: () => number;
  path_open: () => number;
  path_readlink: () => number;
  path_remove_directory: () => number;
  path_rename: () => number;
  path_symlink: () => number;
  path_unlink_file: () => number;
  poll_oneoff: () => number;
  proc_exit: () => number;
  proc_raise: () => number;
  random_get: () => number;
  sched_yield: () => number;
  sock_accept: () => number;
  sock_recv: () => number;
  sock_send: () => number;
  sock_shutdown: () => number;
}

export function createWasi(memory: WebAssembly.Memory): Wasi {
  return {
    args_get: function (): number {
      console.info("args_get");
      return ERRNO_NOSYS;
    },
    args_sizes_get: function (): number {
      console.info("args_sizes_get");
      return ERRNO_NOSYS;
    },
    clock_res_get: function (): number {
      console.info("clock_res_get");
      return ERRNO_NOSYS;
    },
    clock_time_get: function (): number {
      console.info("clock_time_get");
      return ERRNO_NOSYS;
    },
    environ_get: function (): number {
      console.info("environ_get");
      return ERRNO_NOSYS;
    },
    environ_sizes_get: function (): number {
      console.info("environ_sizes_get");
      return ERRNO_NOSYS;
    },
    fd_advise: function (): number {
      console.info("fd_advise");
      return ERRNO_NOSYS;
    },
    fd_allocate: function (): number {
      console.info("fd_allocate");
      return ERRNO_NOSYS;
    },
    fd_close: function (): number {
      console.info("fd_close");
      return ERRNO_NOSYS;
    },
    fd_datasync: function (): number {
      console.info("fd_datasync");
      return ERRNO_NOSYS;
    },
    fd_fdstat_get: function (): number {
      console.info("fd_fdstat_get");
      return ERRNO_NOSYS;
    },
    fd_fdstat_set_flags: function (): number {
      console.info("fd_fdstat_set_flags");
      return ERRNO_NOSYS;
    },
    fd_fdstat_set_rights: function (): number {
      console.info("fd_fdstat_set_rights");
      return ERRNO_NOSYS;
    },
    fd_filestat_get: function (): number {
      console.info("fd_filestat_get");
      return ERRNO_NOSYS;
    },
    fd_filestat_set_size: function (): number {
      console.info("fd_filestat_set_size");
      return ERRNO_NOSYS;
    },
    fd_filestat_set_times: function (): number {
      console.info("fd_filestat_set_times");
      return ERRNO_NOSYS;
    },
    fd_pread: function (): number {
      console.info("fd_pread");
      return ERRNO_NOSYS;
    },
    fd_prestat_dir_name: function (): number {
      console.info("fd_prestat_dir_name");
      return ERRNO_NOSYS;
    },
    fd_prestat_get: function (): number {
      console.info("fd_prestat_get");
      return ERRNO_NOSYS;
    },
    fd_pwrite: function (): number {
      console.info("fd_pwrite");
      return ERRNO_NOSYS;
    },
    fd_read: function (): number {
      console.info("fd_read");
      return ERRNO_NOSYS;
    },
    fd_readdir: function (): number {
      console.info("fd_readdir");
      return ERRNO_NOSYS;
    },
    fd_renumber: function (): number {
      console.info("fd_renumber");
      return ERRNO_NOSYS;
    },
    fd_seek: function (): number {
      console.info("fd_seek");
      return ERRNO_NOSYS;
    },
    fd_sync: function (): number {
      console.info("fd_sync");
      return ERRNO_NOSYS;
    },
    fd_tell: function (): number {
      console.info("fd_tell");
      return ERRNO_NOSYS;
    },
    fd_write: function (
      fd: number,
      iovsOffset: number,
      iovsLength: number,
      nwrittenOffset: number
    ): number {
      console.debug("fd_write", fd, iovsOffset, iovsLength, nwrittenOffset);

      if (fd !== FD_STDOUT && fd !== FD_STDERR) {
        return ERRNO_BADF;
      }

      const memoryView = new DataView(memory.buffer);

      let nwritten = 0;
      for (let i = 0; i < iovsLength; i++) {
        const dataOffset = memoryView.getUint32(iovsOffset, true);
        iovsOffset += 4;

        const dataLength = memoryView.getUint32(iovsOffset, true);
        iovsOffset += 4;

        if (dataLength === 0) {
          continue;
        }

        const data = new Uint8Array(memory.buffer, dataOffset, dataLength);
        const string = new TextDecoder().decode(data);

        if (fd === FD_STDOUT) {
          console.info(string);
        } else {
          console.error(string);
        }

        nwritten += dataLength;
      }

      memoryView.setUint32(nwrittenOffset, nwritten, true);

      return ERRNO_SUCCESS;
    },
    path_create_directory: function (): number {
      console.info("path_create_directory");
      return ERRNO_NOSYS;
    },
    path_filestat_get: function (): number {
      console.info("path_filestat_get");
      return ERRNO_NOSYS;
    },
    path_filestat_set_times: function (): number {
      console.info("path_filestat_set_times");
      return ERRNO_NOSYS;
    },
    path_link: function (): number {
      console.info("path_link");
      return ERRNO_NOSYS;
    },
    path_open: function (): number {
      console.info("path_open");
      return ERRNO_NOSYS;
    },
    path_readlink: function (): number {
      console.info("path_readlink");
      return ERRNO_NOSYS;
    },
    path_remove_directory: function (): number {
      console.info("path_remove_directory");
      return ERRNO_NOSYS;
    },
    path_rename: function (): number {
      console.info("path_rename");
      return ERRNO_NOSYS;
    },
    path_symlink: function (): number {
      console.info("path_symlink");
      return ERRNO_NOSYS;
    },
    path_unlink_file: function (): number {
      console.info("path_unlink_file");
      return ERRNO_NOSYS;
    },
    poll_oneoff: function (): number {
      console.info("poll_oneoff");
      return ERRNO_NOSYS;
    },
    proc_exit: function (): number {
      console.info("proc_exit");
      return ERRNO_NOSYS;
    },
    proc_raise: function (): number {
      console.info("proc_raise");
      return ERRNO_NOSYS;
    },
    random_get: function (): number {
      console.info("random_get");
      return ERRNO_NOSYS;
    },
    sched_yield: function (): number {
      console.info("sched_yield");
      return ERRNO_NOSYS;
    },
    sock_accept: function (): number {
      console.info("sock_accept");
      return ERRNO_NOSYS;
    },
    sock_recv: function (): number {
      console.info("sock_recv");
      return ERRNO_NOSYS;
    },
    sock_send: function (): number {
      console.info("sock_send");
      return ERRNO_NOSYS;
    },
    sock_shutdown: function (): number {
      console.info("sock_shutdown");
      return ERRNO_NOSYS;
    },
  };
}
